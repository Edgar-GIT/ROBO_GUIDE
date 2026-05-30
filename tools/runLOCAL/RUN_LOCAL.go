package main

import (
	"net"
	"os"
	"os/exec"
	"os/signal"
	"path/filepath"
	"runtime"
	"syscall"
	"time"
)

func findProjectRoot() string {
	execPath, _ := os.Executable()
	execDir := filepath.Dir(execPath)

	currentDir := execDir
	for {
		packageJson := filepath.Join(currentDir, "package.json")
		if _, err := os.Stat(packageJson); err == nil {
			return currentDir
		}
		parent := filepath.Dir(currentDir)
		if parent == currentDir {
			break
		}
		currentDir = parent
	}

	return execDir
}

func installDependencies(projectRoot string, npm string) error {
	nodeModules := filepath.Join(projectRoot, "node_modules")
	if _, err := os.Stat(nodeModules); err == nil {
		return nil
	}

	installCmd := exec.Command(npm, "install")
	installCmd.Dir = projectRoot
	if runtime.GOOS == "linux" || runtime.GOOS == "darwin" {
		// On Unix-like systems, set process group to handle signals properly
		installCmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	}
	installCmd.Stdout = nil
	installCmd.Stderr = nil
	installCmd.Stdin = nil

	return installCmd.Run()
}

func main() {
	url := "http://localhost:8080"
	npm := "npm"
	if runtime.GOOS == "windows" {
		npm = "npm.cmd"
	}

	projectRoot := findProjectRoot()

	if err := installDependencies(projectRoot, npm); err != nil {
		os.Exit(1)
	}

	npmCmd := exec.Command(npm, "run", "dev")
	npmCmd.Dir = projectRoot
	if runtime.GOOS == "linux" || runtime.GOOS == "darwin" {
		npmCmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	}
	npmCmd.Stdout = nil
	npmCmd.Stderr = nil
	npmCmd.Stdin = nil

	if err := npmCmd.Start(); err != nil {
		os.Exit(1)
	}

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		if npmCmd.Process != nil {
			npmCmd.Process.Kill()
		}
		os.Exit(0)
	}()

	waitForServer(url, 30*time.Second)

	openBrowserDefault(url)

	_ = npmCmd.Wait()
}

func waitForServer(url string, timeout time.Duration) {
	deadline := time.Now().Add(timeout)
	for time.Now().Before(deadline) {
		conn, err := net.DialTimeout("tcp", "127.0.0.1:8080", 500*time.Millisecond)
		if err == nil {
			conn.Close()
			return
		}
		time.Sleep(200 * time.Millisecond)
	}
}

func openBrowserDefault(url string) {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", "", url)
	case "darwin":
		cmd = exec.Command("open", url)
	case "linux":
		// Try common Linux browser opening commands
		for _, opener := range []string{"xdg-open", "gnome-open", "kde-open"} {
			if _, err := exec.LookPath(opener); err == nil {
				cmd = exec.Command(opener, url)
				break
			}
		}
	default:
		cmd = exec.Command("xdg-open", url)
	}
	if cmd != nil {
		_ = cmd.Start()
	}
}

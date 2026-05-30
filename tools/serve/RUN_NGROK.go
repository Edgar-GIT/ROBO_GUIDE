package main

import (
	"encoding/json"
	"fmt"
	"net"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"runtime"
	"syscall"
	"time"
)

func main() {
	url := "http://localhost:8080"
	npm := "npm"
	if runtime.GOOS == "windows" {
		npm = "npm.cmd"
	}

	fmt.Println("========================================")
	fmt.Println("  Starting Development Server & Ngrok")
	fmt.Println("========================================")
	fmt.Println()

	npmCmd := exec.Command(npm, "run", "dev")
	npmCmd.Stdout = os.Stdout
	npmCmd.Stderr = os.Stderr
	npmCmd.Stdin = os.Stdin
	if runtime.GOOS == "linux" || runtime.GOOS == "darwin" {
		npmCmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	}

	var ngrokCmd *exec.Cmd

	if err := npmCmd.Start(); err != nil {
		fmt.Fprintf(os.Stderr, "Error: Failed to start npm: %v\n", err)
		os.Exit(1)
	}

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		fmt.Println("\n\nShutting down...")
		if npmCmd.Process != nil {
			npmCmd.Process.Kill()
		}
		if ngrokCmd != nil && ngrokCmd.Process != nil {
			ngrokCmd.Process.Kill()
		}
		os.Exit(0)
	}()

	waitForServer(url, 30*time.Second)

	fmt.Println()
	fmt.Println("========================================")
	fmt.Println("  Server is running!")
	fmt.Println("========================================")
	fmt.Printf("  Local URL: %s\n", url)
	fmt.Println()

	ngrokCmd = exec.Command("ngrok", "http", "8080")
	ngrokCmd.Stderr = os.Stderr
	ngrokCmd.Stdin = os.Stdin
	ngrokCmd.Stdout = os.Stdout

	if err := ngrokCmd.Start(); err != nil {
		fmt.Fprintf(os.Stderr, "Error: Failed to start ngrok: %v\n", err)
		fmt.Println("Make sure ngrok is installed and in your PATH")
		npmCmd.Process.Kill()
		os.Exit(1)
	}

	fmt.Println("Starting ngrok tunnel...")
	time.Sleep(3 * time.Second)

	var ngrokURL string
	go func() {
		for i := 0; i < 15; i++ {
			time.Sleep(2 * time.Second)
			ngrokURL = getNgrokURL()
			if ngrokURL != "" {
				fmt.Println()
				fmt.Println("========================================")
				fmt.Println("  Ngrok Tunnel Active!")
				fmt.Println("========================================")
				fmt.Printf("  Public URL: %s\n", ngrokURL)
				fmt.Println()
				fmt.Println("========================================")
				fmt.Println()
				openBrowserDefault(ngrokURL)
				break
			}
		}
	}()

	go func() {
		ngrokCmd.Wait()
	}()

	if err := npmCmd.Wait(); err != nil {
		fmt.Fprintf(os.Stderr, "npm exited: %v\n", err)
	}

	if ngrokCmd.Process != nil {
		ngrokCmd.Process.Kill()
	}
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
	fmt.Fprintf(os.Stderr, "Warning: Server did not respond at %s within %v\n", url, timeout)
}

func getNgrokURL() string {
	resp, err := http.Get("http://127.0.0.1:4040/api/tunnels")
	if err != nil {
		return ""
	}
	defer resp.Body.Close()

	var data struct {
		Tunnels []struct {
			PublicURL string `json:"public_url"`
		} `json:"tunnels"`
	}

	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return ""
	}

	if len(data.Tunnels) > 0 {
		return data.Tunnels[0].PublicURL
	}

	return ""
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

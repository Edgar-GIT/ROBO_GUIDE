.PHONY: dev serve dev-linux serve-linux install help check-deps

# Check dependencies
check-deps:
	@command -v go >/dev/null 2>&1 || (echo "Error: Go is not installed. Please install from https://golang.org/dl/"; exit 1)
	@command -v npm >/dev/null 2>&1 || (echo "Error: npm is not installed. Please install Node.js from https://nodejs.org"; exit 1)
	@echo "✓ Dependencies check passed"

# Default target
help:
	@echo "🚀 ROBO_GUIDE Development Commands"
	@echo ""
	@echo "For Windows:"
	@echo "  make dev-win       - Run local development server"
	@echo "  make serve-win     - Run with ngrok tunnel"
	@echo ""
	@echo "For Linux/macOS:"
	@echo "  make dev           - Run local development server"
	@echo "  make serve         - Run with ngrok tunnel"
	@echo ""
	@echo "Install & Setup:"
	@echo "  make install       - Install dependencies"
	@echo "  make check-deps    - Check required dependencies"

# Windows targets
dev-win:
	@cd tools/runLOCAL && RUN_LOCAL.bat

serve-win:
	@cd tools/serve && RUN_NGROK.bat

# Linux/macOS targets
dev: check-deps install
	@echo "Starting development server..."
	@chmod +x tools/runLOCAL/RUN_LOCAL.sh
	@./tools/runLOCAL/RUN_LOCAL.sh

serve: check-deps install
	@echo "Starting development server with ngrok..."
	@chmod +x tools/serve/RUN_NGROK.sh
	@./tools/serve/RUN_NGROK.sh

# Setup
install:
	@if [ ! -d "node_modules" ]; then \
		echo "Installing npm dependencies..."; \
		npm install; \
	else \
		echo "Dependencies already installed"; \
	fi
	@echo "Fixing executable permissions..."
	@chmod +x node_modules/.bin/* 2>/dev/null || true

# Run dev server directly (without wrapper)
dev-direct: install
	npm run dev

# Build
build:
	npm run build

# Lint
lint:
	npm run lint

# Clean
clean:
	rm -rf dist/ .dist/ node_modules/
	rm -f tools/runLOCAL/RUN_LOCAL tools/runLOCAL/RUN_LOCAL.exe
	rm -f tools/serve/RUN_NGROK tools/serve/RUN_NGROK.exe

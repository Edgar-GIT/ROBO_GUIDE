#!/bin/bash

# Exit on any error
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if go is installed
if ! command -v go &> /dev/null; then
    echo -e "${RED}Error: Go is not installed${NC}"
    echo "Please install Go from https://golang.org/dl/"
    exit 1
fi

echo -e "${YELLOW}Building RUN_LOCAL...${NC}"
echo "Go version: $(go version)"
echo "Script dir: $SCRIPT_DIR"
echo "Project root: $PROJECT_ROOT"

cd "$SCRIPT_DIR"
if ! go build -o RUN_LOCAL RUN_LOCAL.go 2>&1; then
    echo -e "${RED}Error: Failed to build RUN_LOCAL${NC}"
    exit 1
fi

if [ ! -f "$SCRIPT_DIR/RUN_LOCAL" ]; then
    echo -e "${RED}Error: RUN_LOCAL binary was not created${NC}"
    exit 1
fi

echo -e "${GREEN}Build successful!${NC}"
echo -e "${YELLOW}Fixing npm binary permissions...${NC}"
chmod +x "$PROJECT_ROOT/node_modules/.bin"/* 2>/dev/null || true

echo -e "${YELLOW}Starting RUN_LOCAL...${NC}"
echo ""

# Run the binary
"$SCRIPT_DIR/RUN_LOCAL"


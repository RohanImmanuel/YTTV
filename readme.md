# YTTV
Youtube TV App for Mac/Windows

## Overview
This project uses Selenium WebDriver with Node.js to launch Google Chrome in minimal UI mode, spoof the devices user agent, and retain session data. The browser automatically navigates to **YouTube TV**.

## Prerequisites

Ensure you have the following installed:
- **Node.js**
- **Google Chrome**

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/RohanImmanuel/YTTV.git
   cd YTTV
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage
Run the script with:
```sh
    node app.js
```

## Configuration Details
- **Minimal UI Mode**: Runs Chrome with limited UI elements.
- **Roku User-Agent**: Spoofs a Roku device.
- **Persistent Sessions**: Stores Chrome session data for continuity.

## Script Breakdown
- Sets Chrome options:
  - `--user-data-dir=<path>` → Stores session data.
  - `--user-agent=<agent>` → Spoofs a user agent device.
- Launches **YouTube TV** (`https://youtube.com/tv/`)

## Troubleshooting
- **ChromeDriver Version Mismatch**:
  - Ensure ChromeDriver matches your Chrome version.
  - Check versions: `chromedriver --version`
- **Session Data Not Persisting**:
  - Remove `--incognito` if enabled.
  - Ensure `chrome-data` directory is writable.

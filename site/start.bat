@echo off
cd /d "%~dp0"
echo DGtizers is running at http://localhost:5173
python -m http.server 5173

@echo off
rem Double-click to preview the Synapse face: starts a local server and opens the page.
rem Close this window to stop the server.
cd /d "%~dp0"
start "" "http://127.0.0.1:5179/face-demo.html"
node scripts\serve.mjs 5179

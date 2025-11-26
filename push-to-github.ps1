# Git push script for todo-app
Set-Location "C:\projects\todo-app"

Write-Host "Initializing git repository..." -ForegroundColor Green
if (-not (Test-Path .git)) {
    git init
}

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Checking status..." -ForegroundColor Green
git status

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Initial commit: Todo Task Management App with auto-logout feature"

Write-Host "Adding remote repository..." -ForegroundColor Green
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    git remote add origin https://github.com/jayna0203/test_chapter247.git
} else {
    Write-Host "Remote 'origin' already exists. Updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/jayna0203/test_chapter247.git
}

Write-Host "Setting branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Green
Write-Host "Note: You may need to authenticate with GitHub credentials" -ForegroundColor Yellow
git push -u origin main

Write-Host "Done!" -ForegroundColor Green


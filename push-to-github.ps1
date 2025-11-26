# Git Push Script for Todo App
Write-Host "🚀 Pushing Todo App to GitHub..." -ForegroundColor Green
Write-Host ""

Set-Location "C:\projects\todo-app"

# Initialize git if needed
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add remote
Write-Host "Setting up remote repository..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/jayna0203/test_chapter247.git

# Set branch to main
Write-Host "Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .

# Check status
Write-Host ""
Write-Host "Files to be committed:" -ForegroundColor Cyan
git status --short

# Commit
Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Yellow
$commitMessage = "Complete Todo App: Backend API, Authentication, Auto-logout, Password Toggle, CSS Modules"
git commit -m $commitMessage

# Push
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "Note: You may be prompted for GitHub credentials" -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "✅ Done! Check your repository at:" -ForegroundColor Green
Write-Host "https://github.com/jayna0203/test_chapter247" -ForegroundColor Cyan


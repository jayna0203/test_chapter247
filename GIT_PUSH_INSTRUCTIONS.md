# Git Push Instructions for Todo App

## Steps to Push Code to GitHub

Open PowerShell or Git Bash in the `C:\projects\todo-app` directory and run these commands:

### 1. Initialize Git (if not already done)

```bash
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Create Initial Commit

```bash
git commit -m "Initial commit: Todo Task Management App with auto-logout feature"
```

### 4. Add Remote Repository

```bash
git remote add origin https://github.com/jayna0203/test_chapter247.git
```

If the remote already exists, update it:

```bash
git remote set-url origin https://github.com/jayna0203/test_chapter247.git
```

### 5. Set Branch to Main

```bash
git branch -M main
```

### 6. Push to GitHub

```bash
git push -u origin main
```

**Note:** You may be prompted to authenticate with GitHub. You can use:

- Personal Access Token (recommended)
- GitHub CLI (`gh auth login`)
- GitHub Desktop

## Alternative: Using the PowerShell Script

I've created a script `push-to-github.ps1` that automates all these steps. Run:

```powershell
cd C:\projects\todo-app
powershell -ExecutionPolicy Bypass -File push-to-github.ps1
```

## What's Included

The repository includes:

- ✅ Complete Next.js frontend application
- ✅ All source code files
- ✅ CSS Modules for styling
- ✅ Documentation files (README, WRITEUP, etc.)
- ✅ Configuration files
- ✅ `.gitignore` to exclude node_modules

## Files Excluded (via .gitignore)

- `node_modules/` - Dependencies (install with `npm install`)
- `.next/` - Build files
- `.env` files - Environment variables
- Build artifacts

## After Pushing

1. Go to https://github.com/jayna0203/test_chapter247
2. Verify all files are uploaded
3. Add a README if needed (already included)
4. Set up GitHub Pages or deployment if needed

## Troubleshooting

### Authentication Issues

If you get authentication errors:

1. Generate a Personal Access Token: https://github.com/settings/tokens
2. Use token as password when prompted
3. Or use GitHub CLI: `gh auth login`

### Remote Already Exists

If you see "remote origin already exists":

```bash
git remote remove origin
git remote add origin https://github.com/jayna0203/test_chapter247.git
```

### Force Push (if needed)

```bash
git push -u origin main --force
```

**Warning:** Only use `--force` if you're sure you want to overwrite remote content.

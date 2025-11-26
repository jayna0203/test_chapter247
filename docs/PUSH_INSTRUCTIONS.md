# 📤 Push Code to GitHub - Instructions

## Quick Push (PowerShell Script)

Run this command in PowerShell:

```powershell
cd C:\projects\todo-app
powershell -ExecutionPolicy Bypass -File push-to-github.ps1
```

## Manual Push Steps

### 1. Navigate to Project

```bash
cd C:\projects\todo-app
```

### 2. Initialize Git (if not already done)

```bash
git init
```

### 3. Add Remote Repository

```bash
git remote add origin https://github.com/jayna0203/test_chapter247.git
```

If remote already exists:

```bash
git remote set-url origin https://github.com/jayna0203/test_chapter247.git
```

### 4. Add All Files

```bash
git add .
```

### 5. Commit Changes

```bash
git commit -m "Complete Todo App: Backend API, Authentication, Auto-logout, Password Toggle"
```

### 6. Set Branch to Main

```bash
git branch -M main
```

### 7. Push to GitHub

```bash
git push -u origin main
```

## Authentication

When you run `git push`, you'll be prompted for credentials:

**Option 1: Personal Access Token (Recommended)**

1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy the token
5. Use token as password when prompted

**Option 2: GitHub CLI**

```bash
gh auth login
git push -u origin main
```

**Option 3: GitHub Desktop**

- Use GitHub Desktop app for easier authentication

## What Will Be Pushed

✅ Frontend (Next.js application)
✅ Backend (Express.js API)
✅ All source code
✅ Configuration files
✅ Documentation files (in `docs/` folder)
✅ CSS Modules

❌ NOT pushed (via .gitignore):

- node_modules/
- .next/
- backend/data/
- .env files

## Verify Push

After pushing, visit:
https://github.com/jayna0203/test_chapter247

You should see all your files there!

## Troubleshooting

### "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/jayna0203/test_chapter247.git
```

### "Authentication failed"

- Use Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

### "Permission denied"

- Make sure you have write access to the repository
- Check repository settings on GitHub

### "Nothing to commit"

- Files might already be committed
- Check: `git status`

---

**Ready to push?** Run the PowerShell script or follow manual steps above!

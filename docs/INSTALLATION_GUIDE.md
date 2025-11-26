# 📦 Installation & Setup Guide

Complete step-by-step instructions to run the Todo App locally.

## Prerequisites

Before starting, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning repository)

### Verify Installation

```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
git --version    # Should show git version
```

## Step-by-Step Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/jayna0203/test_chapter247.git
cd test_chapter247
```

### Step 2: Backend Setup

#### 2.1 Navigate to Backend Folder

```bash
cd backend
```

#### 2.2 Install Dependencies

```bash
npm install
```

This will install:

- express
- cors
- jsonwebtoken
- bcryptjs
- body-parser
- nodemon (dev dependency)

**Expected output:**

```
added 50+ packages in 30s
```

#### 2.3 (Optional) Configure Environment Variables

Create a `.env` file in the `backend` folder:

```bash
# Windows PowerShell
New-Item -Path .env -ItemType File

# Or manually create .env file
```

Add the following (or use defaults):

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**Note:** If you don't create `.env`, the server will use default values.

#### 2.4 Start Backend Server

```bash
npm run dev
```

**Expected output:**

```
🚀 Server is running on http://localhost:5000
📁 Data stored in: [path]/data
```

**Keep this terminal open!** The backend must be running for the frontend to work.

### Step 3: Frontend Setup

#### 3.1 Open a NEW Terminal Window

**Important:** Keep the backend terminal running, open a new terminal for frontend.

#### 3.2 Navigate to Frontend Folder

```bash
cd C:\projects\todo-app\frontend
# Or navigate from repository root:
cd frontend
```

#### 3.3 Install Dependencies

```bash
npm install
```

This will install:

- next
- react
- react-dom
- typescript
- tailwindcss
- axios
- and other dependencies

**Expected output:**

```
added 400+ packages in 2-3 minutes
```

#### 3.4 (Optional) Configure Environment Variables

Create a `.env.local` file in the `frontend` folder:

```bash
# Windows PowerShell
New-Item -Path .env.local -ItemType File
```

Add the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Note:** If you don't create `.env.local`, it defaults to `http://localhost:5000/api`.

#### 3.5 Start Frontend Server

```bash
npm run dev
```

**Expected output:**

```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  - Ready in 2.5s
```

### Step 4: Verify Installation

#### 4.1 Check Backend

Open browser and visit:

```
http://localhost:5000/api/health
```

**Expected response:**

```json
{
  "status": "OK",
  "message": "Todo App API is running"
}
```

#### 4.2 Check Frontend

Open browser and visit:

```
http://localhost:3000
```

You should see the login page.

## 🎯 First Time Usage

### 1. Create an Account

1. Click "Sign up" on the login page
2. Fill in the registration form:
   - First Name
   - Last Name
   - Email
   - Username
   - Password (minimum 6 characters)
   - Confirm Password
3. Click "Sign Up"
4. You'll be automatically logged in and redirected to dashboard

### 2. Create Your First Task

1. Type a task in the input field
2. Click "Add Task" or press Enter
3. Your task appears in the list

### 3. Manage Tasks

- **Complete:** Click the checkbox
- **Delete:** Hover over task and click "Delete"

### 4. Test Auto-Logout

1. Stay inactive for 10 minutes
2. Warning modal appears with 60-second countdown
3. Click "Stay Logged In" to continue
4. Or click "Logout Now" to logout immediately

## 🔧 Troubleshooting

### Issue: Backend won't start

**Symptoms:**

- Error: "Port 5000 already in use"
- Error: "Cannot find module"

**Solutions:**

1. **Port in use:**

   ```bash
   # Find process using port 5000
   netstat -ano | findstr :5000

   # Kill the process (replace PID with actual process ID)
   taskkill /PID [PID] /F

   # Or change port in backend/server.js
   const PORT = process.env.PORT || 5001;
   ```

2. **Module not found:**
   ```bash
   cd backend
   rm -rf node_modules
   npm install
   ```

### Issue: Frontend can't connect to backend

**Symptoms:**

- "Cannot connect to server" error
- Network error in browser console

**Solutions:**

1. **Verify backend is running:**

   - Check backend terminal shows "Server is running"
   - Visit http://localhost:5000/api/health

2. **Check environment variable:**

   ```bash
   # Verify .env.local exists in frontend folder
   # Should contain:
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Restart frontend:**
   ```bash
   # Stop frontend (Ctrl+C)
   # Restart:
   npm run dev
   ```

### Issue: npm install fails

**Symptoms:**

- "npm ERR!" messages
- Installation hangs

**Solutions:**

1. **Clear npm cache:**

   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall:**

   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check Node.js version:**
   ```bash
   node --version  # Should be v18+
   ```

### Issue: Login/Registration fails

**Symptoms:**

- "Invalid credentials" error
- "User already exists" error

**Solutions:**

1. **Backend not running:**

   - Start backend server first
   - Verify http://localhost:5000/api/health works

2. **User already exists:**

   - Use different email/username
   - Or delete `backend/data/users.json` to reset

3. **Wrong credentials:**
   - Register a new account
   - Or check `backend/data/users.json` for existing users

## 📁 Project Structure After Installation

```
todo-app/
├── backend/
│   ├── node_modules/      # Installed dependencies
│   ├── data/              # Auto-created on first run
│   │   ├── users.json     # User accounts
│   │   └── todos.json     # Todo items
│   ├── server.js
│   ├── package.json
│   └── .env               # Optional
├── frontend/
│   ├── node_modules/      # Installed dependencies
│   ├── .next/             # Build files (auto-created)
│   ├── app/
│   ├── components/
│   └── .env.local         # Optional
└── README.md
```

## ✅ Verification Checklist

Before considering installation complete, verify:

- [ ] Backend server runs without errors
- [ ] http://localhost:5000/api/health returns JSON
- [ ] Frontend server runs without errors
- [ ] http://localhost:3000 shows login page
- [ ] Can register a new account
- [ ] Can login with registered account
- [ ] Can create a task
- [ ] Can update a task (mark complete)
- [ ] Can delete a task
- [ ] Auto-logout warning appears after inactivity

## 🚀 Quick Commands Reference

### Backend

```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start development server
npm start            # Start production server
```

### Frontend

```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
```

## 📞 Need Help?

If you encounter issues:

1. Check the error message in terminal
2. Verify both servers are running
3. Check browser console for errors
4. Review the troubleshooting section above
5. Check `docs/TECHNICAL_WRITEUP.md` for implementation details

---

**Installation complete!** You're ready to use the Todo App. 🎉

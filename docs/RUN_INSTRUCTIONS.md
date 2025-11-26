# 🚀 How to Run the Application

## Quick Start (2 Terminals Required)

### Terminal 1: Backend Server

```bash
cd backend
npm install
npm run dev
```

**Expected Output:**

```
🚀 Server is running on http://localhost:5000
📁 Data stored in: [path]/data
```

### Terminal 2: Frontend Server

```bash
cd frontend
npm install
npm run dev
```

**Expected Output:**

```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
```

### Open Browser

Visit: **http://localhost:3000**

## Detailed Steps

### 1. Prerequisites Check

```bash
node --version   # Should be v18+
npm --version    # Should be 9+
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Wait for installation (30-60 seconds).

### 3. Start Backend Server

```bash
npm run dev
```

**Keep this terminal open!** The backend must stay running.

### 4. Install Frontend Dependencies (New Terminal)

Open a **NEW** terminal window:

```bash
cd frontend
npm install
```

Wait for installation (2-3 minutes).

### 5. Start Frontend Server

```bash
npm run dev
```

### 6. Access Application

Open browser: **http://localhost:3000**

## First Time Setup

1. **Register:** Click "Sign up" and create an account
2. **Login:** Use your credentials to login
3. **Create Tasks:** Start adding tasks!

## Environment Variables (Optional)

### Backend

Create `backend/.env`:

```
PORT=5000
JWT_SECRET=your-secret-key
```

### Frontend

Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Note:** Defaults work if you don't create these files.

## Verification

### Check Backend

Visit: http://localhost:5000/api/health
Should return: `{"status":"OK","message":"Todo App API is running"}`

### Check Frontend

Visit: http://localhost:3000
Should show: Login page

## Common Issues

### "Cannot connect to server"

- **Solution:** Make sure backend is running in Terminal 1

### "Port already in use"

- **Solution:** Change PORT in `backend/server.js` or kill the process using port 5000

### "Module not found"

- **Solution:** Run `npm install` in the respective folder

## Stop the Application

- **Backend:** Press `Ctrl+C` in Terminal 1
- **Frontend:** Press `Ctrl+C` in Terminal 2

---

**That's it!** The application should now be running. 🎉

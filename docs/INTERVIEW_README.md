# 📋 Todo Task Management App - Interview Submission

## ✅ Deliverables Checklist

- [x] **GitHub Repository** with `backend/` and `frontend/` folders
- [x] **Environment Variables** documentation (`.env` files explained)
- [x] **Detailed Instructions** on how to run locally
- [x] **Technical Write-up** explaining approach, challenges, and solutions

## 📁 Repository Structure

```
test_chapter247/
├── backend/                    # Express.js API Server
│   ├── server.js              # Main server with all routes
│   ├── package.json           # Backend dependencies
│   ├── data/                  # JSON storage (auto-created)
│   └── README.md              # Backend docs
├── frontend/                   # Next.js Application
│   ├── app/                   # Pages & routes
│   ├── components/            # React components
│   ├── context/               # Auth state
│   ├── hooks/                 # Custom hooks
│   └── utils/                 # API client
├── docs/                       # Documentation folder
│   ├── INSTALLATION_GUIDE.md
│   ├── RUN_INSTRUCTIONS.md
│   ├── TECHNICAL_WRITEUP.md
│   └── ENVIRONMENT_VARIABLES.md
├── README.md                   # Main documentation
└── ... (other files)
```

## 🚀 How to Run (Quick Version)

### Terminal 1: Backend

```bash
cd backend
npm install
npm run dev
```

### Terminal 2: Frontend

```bash
cd frontend
npm install
npm run dev
```

### Browser

Open: **http://localhost:3000**

**Detailed instructions:** See `docs/INSTALLATION_GUIDE.md` or `docs/RUN_INSTRUCTIONS.md`

## 🔐 Environment Variables

### Backend (Optional)

Create `backend/.env`:

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key
```

### Frontend (Optional)

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Note:** Defaults work if files are not created. See `docs/ENVIRONMENT_VARIABLES.md` for details.

## 📚 Documentation Files

All documentation is in the `docs/` folder:

1. **README.md** (root) - Project overview, features, API endpoints
2. **docs/INSTALLATION_GUIDE.md** - Complete step-by-step installation
3. **docs/RUN_INSTRUCTIONS.md** - Quick start guide
4. **docs/TECHNICAL_WRITEUP.md** - Technical approach, challenges, solutions
5. **docs/ENVIRONMENT_VARIABLES.md** - Environment configuration guide

## ✨ Features Implemented

- ✅ User Registration & Authentication (JWT)
- ✅ Task Management (Create, Read, Update, Delete)
- ✅ Auto-logout after 10 minutes of inactivity
- ✅ 60-second warning countdown before logout
- ✅ "Stay Logged In" button (resets timer)
- ✅ "Logout Now" button (immediate logout)
- ✅ Activity tracking (mouse, keyboard, scroll, touch)
- ✅ Password show/hide toggle
- ✅ Responsive design with CSS Modules
- ✅ Error handling and user feedback

## 🛠️ Tech Stack

**Frontend:**

- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- React Context API
- Custom Hooks

**Backend:**

- Express.js
- JWT Authentication
- bcryptjs (Password hashing)
- JSON File Storage

## 📖 Key Documentation

**For Installation:** `docs/INSTALLATION_GUIDE.md`  
**For Quick Start:** `docs/RUN_INSTRUCTIONS.md`  
**For Technical Details:** `docs/TECHNICAL_WRITEUP.md`  
**For Environment Setup:** `docs/ENVIRONMENT_VARIABLES.md`

---

**All requirements met!** Ready for review. 🎉

# Todo Task Management Application

A full-stack MERN-style application for managing tasks with automatic logout functionality, built with Next.js frontend and Express.js backend.

## 📋 Project Structure

```
todo-app/
├── backend/              # Express.js API server
│   ├── server.js         # Main server file
│   ├── package.json      # Backend dependencies
│   ├── data/             # JSON file storage (auto-created)
│   └── README.md         # Backend documentation
├── frontend/             # Next.js application
│   ├── app/              # Pages and routes
│   ├── components/       # React components
│   ├── context/          # Auth context
│   ├── hooks/            # Custom hooks
│   ├── utils/            # API utilities
│   └── package.json      # Frontend dependencies
├── docs/                 # Documentation folder
│   ├── INSTALLATION_GUIDE.md
│   ├── RUN_INSTRUCTIONS.md
│   ├── TECHNICAL_WRITEUP.md
│   ├── ENVIRONMENT_VARIABLES.md
│   └── ... (all documentation files)
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository

```bash
git clone https://github.com/jayna0203/test_chapter247.git
cd test_chapter247
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

### Step 3: Frontend Setup

```bash
cd ../frontend
npm install
```

### Step 4: Environment Configuration

**Backend** (Optional - uses defaults if not set):

```bash
cd backend
# Create .env file (see .env.example)
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this
```

**Frontend**:

```bash
cd frontend
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Step 5: Run the Application

**Terminal 1 - Start Backend:**

```bash
cd backend
npm run dev
```

Backend runs on: `http://localhost:5000`

**Terminal 2 - Start Frontend:**

```bash
cd frontend
npm run dev
```

Frontend runs on: `http://localhost:3000`

### Step 6: Use the Application

1. Open browser: `http://localhost:3000`
2. Click "Sign up" to create a new account
3. Fill in registration form and submit
4. You'll be automatically logged in
5. Start creating and managing your tasks!

## 🔑 Features

- ✅ User Registration & Authentication
- ✅ JWT-based secure authentication
- ✅ Task CRUD operations (Create, Read, Update, Delete)
- ✅ Auto-logout after 10 minutes of inactivity
- ✅ 60-second warning countdown before logout
- ✅ Password show/hide toggle
- ✅ Responsive design with CSS Modules
- ✅ Real-time task updates

## 📚 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Todos

- `GET /api/todos` - Get all todos for current user (protected)
- `POST /api/todos` - Create new todo (protected)
- `PUT /api/todos/:id` - Update todo (protected)
- `DELETE /api/todos/:id` - Delete todo (protected)

## 🛠️ Technologies Used

### Frontend

- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- React Context API
- Custom Hooks

### Backend

- Express.js
- JWT Authentication
- bcryptjs (Password hashing)
- CORS
- JSON File Storage

## 📝 Scripts

### Backend

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Auto-logout on inactivity
- Secure token storage

## 🐛 Troubleshooting

### Backend won't start

- Ensure port 5000 is available
- Check Node.js is installed: `node --version`
- Run `npm install` in backend folder

### Frontend can't connect

- Verify backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Ensure CORS is enabled in backend

### Port already in use

- Change PORT in backend `.env` or `server.js`
- Update frontend `.env.local` with new port

## 📄 License

This project is for educational/demonstration purposes.

---

**For detailed documentation, see the `docs/` folder:**

- Installation: `docs/INSTALLATION_GUIDE.md`
- Quick Start: `docs/RUN_INSTRUCTIONS.md`
- Technical Details: `docs/TECHNICAL_WRITEUP.md`
- Environment Setup: `docs/ENVIRONMENT_VARIABLES.md`

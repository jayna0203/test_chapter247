# Todo Task Management App

A modern Next.js application for managing tasks with automatic logout functionality for enhanced security.

## 🚀 Features

- **User Authentication**: Login and signup functionality using JWT tokens
- **Task Management**: Create, update, and delete tasks
- **Auto-Logout**: Automatic logout after 10 minutes of inactivity
- **Logout Warning**: 60-second countdown warning before auto-logout
- **Activity Tracking**: Monitors mouse movements, keyboard inputs, and clicks
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Real-time Updates**: Seamless task updates without page refresh

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Navigate to the Frontend Directory

```bash
cd C:\projects\todo-app\frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Demo Credentials

Since this app uses the DummyJSON API, use these credentials to login:

- **Username**: `emilys`
- **Password**: `emilyspass`

## 📁 Project Structure

```
frontend/
├── app/
│   ├── dashboard/          # Main dashboard page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── layout.tsx          # Root layout with AuthProvider
│   ├── page.tsx            # Home page (redirects)
│   └── globals.css         # Global styles
├── components/
│   ├── TodoForm.tsx        # Form to create new tasks
│   ├── TodoList.tsx        # List of tasks
│   └── LogoutWarningModal.tsx  # Auto-logout warning popup
├── context/
│   └── AuthContext.tsx     # Authentication state management
├── hooks/
│   └── useAutoLogout.tsx   # Custom hook for auto-logout logic
└── package.json            # Dependencies
```

## 🎯 How It Works

### Authentication Flow

1. User logs in with credentials
2. JWT token is stored in localStorage
3. Token is used for subsequent API calls
4. User is redirected to dashboard

### Auto-Logout Feature

1. **Inactivity Timer**: Starts a 10-minute timer on login
2. **Activity Detection**: Monitors:
   - Mouse movements
   - Mouse clicks
   - Keyboard inputs
   - Scroll events
   - Touch events
3. **Warning Popup**: After 10 minutes of inactivity:
   - Shows a modal with 60-second countdown
   - Provides "Stay Logged In" button (resets timer to 10 minutes)
   - Provides "Logout Now" button (immediate logout)
4. **Timer Reset**: Any user activity resets the inactivity timer
5. **Automatic Logout**: If no action taken, user is logged out after countdown

### Task Management

- **Create Tasks**: Add new tasks using the form
- **Update Tasks**: Check/uncheck to mark as complete
- **Delete Tasks**: Remove tasks you no longer need
- Tasks are fetched from DummyJSON API
- Changes are reflected in real-time

## 🔧 API Endpoints Used

This app uses the DummyJSON API:

- **Authentication**: `https://dummyjson.com/auth/login`
- **Get Todos**: `https://dummyjson.com/todos/user/{userId}`
- **Add Todo**: `https://dummyjson.com/todos/add`
- **Update Todo**: `https://dummyjson.com/todos/{id}`
- **Delete Todo**: `https://dummyjson.com/todos/{id}`

## 🎨 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: State management
- **Axios**: HTTP client for API calls
- **DummyJSON API**: Mock REST API

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Security Features

- JWT-based authentication
- Automatic session timeout
- Activity monitoring
- Secure token storage
- Warning before logout

## 🎁 Bonus Features

The application includes several enhancements:

- Modern, clean UI design
- Smooth animations and transitions
- Real-time task counter (pending/completed)
- User profile display
- Responsive layout for all devices
- Loading states for better UX

## 📖 User Guide

### Getting Started

1. Open the application
2. Click "Sign In" or use demo credentials
3. You'll be redirected to the dashboard

### Managing Tasks

1. **Add Task**: Type in the input field and click "Add Task"
2. **Complete Task**: Click the checkbox next to a task
3. **Delete Task**: Hover over a task and click "Delete"

### Auto-Logout

- The timer starts when you login
- Any interaction resets the timer
- After 10 minutes of no activity, you'll see a warning
- Click "Stay Logged In" to continue your session
- Click "Logout Now" to logout immediately

## 🐛 Troubleshooting

### Application won't start

- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again
- Check if port 3000 is available

### Login not working

- Use the demo credentials: `emilys` / `emilyspass`
- Check internet connection (API requires network access)
- Clear browser cache and localStorage

### Tasks not loading

- Check browser console for errors
- Verify API is accessible: https://dummyjson.com
- Ensure you're logged in

## 📄 License

This project is for educational purposes.

## 👥 Support

For issues or questions, please refer to the write-up document included in the project.


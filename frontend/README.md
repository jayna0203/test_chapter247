# Frontend - Todo Task Management App

## 📁 Project Structure

```
frontend/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx                 # Dashboard page component
│   │   └── dashboard.module.css     # Dashboard styles
│   ├── login/
│   │   ├── page.tsx                 # Login page component
│   │   └── login.module.css         # Login page styles
│   ├── signup/
│   │   ├── page.tsx                 # Signup page component
│   │   └── signup.module.css        # Signup page styles
│   ├── layout.tsx                   # Root layout with providers
│   ├── page.tsx                     # Home page (redirects)
│   ├── page.module.css              # Home page styles
│   └── globals.css                  # Global styles
├── components/
│   ├── TodoForm.tsx                 # Task creation form
│   ├── TodoForm.module.css          # Form styles
│   ├── TodoList.tsx                 # Task list display
│   ├── TodoList.module.css          # List styles
│   ├── LogoutWarningModal.tsx       # Auto-logout warning popup
│   └── LogoutWarningModal.module.css # Modal styles
├── context/
│   └── AuthContext.tsx              # Authentication state management
├── hooks/
│   └── useAutoLogout.tsx            # Custom auto-logout logic
├── next.config.ts                   # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
└── package.json                     # Dependencies

## 🎨 Styling Architecture

This project uses **CSS Modules** for component styling:

- **Scoped Styles**: Each component has its own CSS module
- **No Class Name Conflicts**: Automatic class name generation
- **Better Maintainability**: Styles are co-located with components
- **Type Safety**: TypeScript support for class names

### CSS Modules Pattern

Each page/component follows this pattern:
```
ComponentName.tsx
ComponentName.module.css
```

Import and use:
```typescript
import styles from './ComponentName.module.css';

<div className={styles.container}>...</div>
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🔑 Demo Credentials

- Username: `emilys`
- Password: `emilyspass`

## 📦 Key Dependencies

- **next**: React framework
- **react** & **react-dom**: UI library
- **typescript**: Type safety
- **axios**: HTTP client

## 🏗️ Architecture

### State Management
- **Context API**: Used for global auth state
- **Local State**: Component-level state with useState
- **Custom Hooks**: Reusable logic (useAutoLogout)

### Routing
- **App Router**: Next.js 13+ file-based routing
- **Client Components**: All pages are client-side rendered
- **Protected Routes**: Auth check in useEffect

### API Integration
- **DummyJSON API**: Mock REST API for development
- **Fetch API**: Native HTTP requests
- **Error Handling**: Try-catch blocks for all API calls

## 🔒 Auto-Logout Feature

The auto-logout system consists of:

1. **useAutoLogout Hook** (`hooks/useAutoLogout.tsx`)
   - Manages three timers: inactivity, warning, countdown
   - Tracks user activity events
   - Handles timer resets

2. **LogoutWarningModal** (`components/LogoutWarningModal.tsx`)
   - Displays 60-second countdown
   - Provides "Stay Logged In" and "Logout Now" buttons
   - Animated UI with bounce effects

3. **Activity Tracking**
   - Mouse movements
   - Mouse clicks
   - Keyboard inputs
   - Scroll events
   - Touch events

## 🎯 Component Breakdown

### Pages

#### Login (`app/login/page.tsx`)
- Email/password form
- Error handling
- Demo credentials display
- Animated background with floating blobs

#### Signup (`app/signup/page.tsx`)
- Multi-field registration form
- Password confirmation
- Validation messages

#### Dashboard (`app/dashboard/page.tsx`)
- User profile display
- Task creation form
- Task list with filters
- Auto-logout info badge

### Components

#### TodoForm
- Single input field
- Submit button
- Enter key support

#### TodoList
- Empty state message
- Checkbox for completion
- Delete button (hover to show)
- Completion status styling

#### LogoutWarningModal
- Countdown timer
- Action buttons
- Animated entrance
- Backdrop overlay

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#8b5cf6 to #d946ef)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Neutral**: Gray scale

### Typography
- **Font**: Geist Sans (system fallback)
- **Sizes**: 0.75rem - 2.25rem
- **Weights**: 400, 600, 700

### Spacing
- **Base unit**: 0.25rem (4px)
- **Scale**: 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, etc.

### Animations
- **Float**: Floating blob effect (3s)
- **Bounce**: Gentle bounce (1s)
- **Spin**: Loading spinner (1s)
- **Fade In**: Element entrance (0.3s)
- **Slide Up**: Modal entrance (0.3s)

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (@/*)
- Type checking in build

### Next.js
- App Router
- Server Components disabled (all client components)
- Image optimization for remote patterns

## 📱 Responsive Design

All components are mobile-responsive:
- **Desktop**: Full layout with sidebars
- **Tablet**: Stacked layout
- **Mobile**: Single column, touch-optimized

## 🧪 Development Tips

### Adding New Pages
1. Create folder in `app/`
2. Add `page.tsx` and `page.module.css`
3. Import and use CSS module

### Adding New Components
1. Create file in `components/`
2. Create corresponding `.module.css`
3. Export component

### Styling Best Practices
- Use CSS modules for all components
- Keep styles co-located with components
- Use semantic class names
- Avoid !important
- Use CSS variables for theme values

## 🐛 Common Issues

### Styles not applying
- Check if CSS module is imported
- Verify className syntax: `className={styles.myClass}`
- Clear Next.js cache: `rm -rf .next`

### Authentication issues
- Clear localStorage
- Check if token exists
- Verify API endpoint

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [CSS Modules Guide](https://github.com/css-modules/css-modules)
- [DummyJSON API](https://dummyjson.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

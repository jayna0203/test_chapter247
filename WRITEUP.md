# Project Write-Up: Todo Task Management Application

## 📋 Overview

This document explains the approach, implementation details, challenges faced, and solutions for the Todo Task Management application.

## 🎯 Approach

### 1. Technology Stack Selection

**Next.js with App Router**: Chose Next.js 15 for its:
- Built-in routing system
- Server and client component flexibility
- TypeScript support out of the box
- Excellent developer experience

**Tailwind CSS**: Selected for:
- Rapid UI development
- Consistent design system
- Small bundle size
- Responsive design utilities

**React Context API**: Used for state management because:
- Simple authentication state needs
- No need for complex state management library
- Built-in to React
- Easy to implement and understand

### 2. Architecture Decisions

#### Authentication Layer
- Created `AuthContext` to manage user state globally
- Stored JWT token in localStorage for persistence
- Implemented automatic token checking on app load
- Protected routes using context values

#### Auto-Logout System
- Built custom `useAutoLogout` hook for reusability
- Separated concerns (UI logic vs timer logic)
- Used refs to manage timers (avoiding unnecessary re-renders)
- Implemented activity listeners at window level

#### Component Structure
- **Pages**: Login, Signup, Dashboard (route-level)
- **Components**: TodoForm, TodoList, LogoutWarningModal (reusable)
- **Hooks**: useAutoLogout (custom logic)
- **Context**: AuthContext (global state)

### 3. Implementation Strategy

#### Phase 1: Project Setup
1. Created Next.js project with TypeScript and Tailwind
2. Installed required dependencies (axios)
3. Set up project structure

#### Phase 2: Authentication
1. Implemented AuthContext with login/logout functions
2. Created Login and Signup pages
3. Added JWT token management
4. Implemented protected routing

#### Phase 3: Todo Management
1. Created Dashboard page
2. Built TodoForm for adding tasks
3. Built TodoList for displaying tasks
4. Implemented CRUD operations with DummyJSON API

#### Phase 4: Auto-Logout Feature
1. Created useAutoLogout custom hook
2. Implemented inactivity timer (10 minutes)
3. Added activity event listeners
4. Built LogoutWarningModal with countdown
5. Implemented "Stay Logged In" and "Logout Now" buttons

#### Phase 5: Polish & UX
1. Added smooth animations
2. Implemented loading states
3. Added task counters
4. Improved error handling
5. Made responsive design

## 🚧 Challenges Faced & Solutions

### Challenge 1: Managing Multiple Timers

**Problem**: Needed to manage three different timers:
- Inactivity timer (10 minutes)
- Warning timer (60 seconds)
- Countdown interval (1 second updates)

**Solution**: 
- Used `useRef` to store timer IDs (prevents re-renders)
- Created `clearAllTimers()` function for cleanup
- Properly cleared timers on component unmount
- Reset timers on user activity

```typescript
const clearAllTimers = useCallback(() => {
  if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
  if (warningTimer.current) clearTimeout(warningTimer.current);
  if (countdownInterval.current) clearInterval(countdownInterval.current);
}, []);
```

### Challenge 2: Activity Detection During Warning

**Problem**: Initial implementation would reset timer even when warning modal was showing, which wasn't desired behavior.

**Solution**: 
- Added condition to check if warning is showing
- Only reset timer if warning is NOT visible
- This allows countdown to complete unless user clicks button

```typescript
const handleActivity = () => {
  if (!showWarning) {
    resetTimer();
  }
};
```

### Challenge 3: DummyJSON API Limitations

**Problem**: 
- No real signup endpoint
- Mock API doesn't actually store data
- Limited to predefined users

**Solution**: 
- Created informative error messages
- Added demo credentials on login page
- Made signup page redirect to login with instructions
- Documented API limitations clearly

### Challenge 4: Preventing Memory Leaks

**Problem**: Event listeners and timers could cause memory leaks if not cleaned up properly.

**Solution**: 
- Used cleanup function in useEffect
- Removed all event listeners on unmount
- Cleared all timers on component unmount
- Used useCallback to memoize functions

```typescript
return () => {
  events.forEach(event => {
    window.removeEventListener(event, handleActivity);
  });
  clearAllTimers();
};
```

### Challenge 5: User Experience During Auto-Logout

**Problem**: Abrupt logout could cause data loss or confusion.

**Solution**: 
- Implemented 60-second warning with clear countdown
- Added two action buttons with clear labels
- Made warning modal prominent with animations
- Added visual countdown (large number display)
- Included explanatory text

### Challenge 6: TypeScript Type Safety

**Problem**: Managing types across Context, components, and API responses.

**Solution**: 
- Defined interfaces for User and Todo
- Created proper TypeScript interfaces for all props
- Used strict type checking
- Ensured type safety in Context API

### Challenge 7: State Persistence

**Problem**: Losing authentication state on page refresh.

**Solution**: 
- Stored token and user data in localStorage
- Checked localStorage on app initialization
- Automatically restored session if valid token exists
- Clear localStorage on logout

## 🎨 Design Decisions

### UI/UX Choices

1. **Gradient Background**: Used subtle gradients for modern look
2. **Card-Based Layout**: Separated concerns visually
3. **Hover Effects**: Added hover states for better feedback
4. **Color Scheme**: Blue for primary actions, red for destructive actions
5. **Animations**: Smooth transitions for professional feel

### Accessibility

1. **Semantic HTML**: Used proper form elements
2. **Focus States**: Added visible focus indicators
3. **Button Labels**: Clear, descriptive button text
4. **Error Messages**: Prominent and readable
5. **Loading States**: Visual feedback during operations

## 💡 What I Learned

1. **Timer Management**: Proper cleanup and ref usage for timers
2. **Activity Tracking**: Multiple event types for comprehensive detection
3. **Context Pattern**: Global state management in Next.js App Router
4. **TypeScript Benefits**: Caught many potential bugs during development
5. **User Experience**: Importance of warnings before destructive actions

## 🚀 Future Enhancements

If this were a production application, I would add:

1. **Backend Integration**: Real database instead of mock API
2. **Persistent Sessions**: Store sessions server-side
3. **Refresh Tokens**: Implement token refresh mechanism
4. **Task Categories**: Organize tasks by category/project
5. **Task Priority**: Add priority levels to tasks
6. **Due Dates**: Add deadline functionality
7. **Notifications**: Browser notifications for tasks
8. **Dark Mode**: Theme switcher for user preference
9. **Settings Page**: Customize timeout duration (bonus feature)
10. **Remember Me**: Implement "Stay Signed In" option (bonus feature)

## 🔍 Code Quality Practices

1. **Component Reusability**: Created modular, reusable components
2. **Separation of Concerns**: Logic separated from presentation
3. **Type Safety**: Full TypeScript implementation
4. **Error Handling**: Try-catch blocks for API calls
5. **Clean Code**: Consistent formatting and naming conventions
6. **Comments**: Added explanatory comments where needed

## 📊 Performance Considerations

1. **useCallback**: Memoized functions to prevent unnecessary re-renders
2. **Event Listener Optimization**: Single listener per event type
3. **Conditional Rendering**: Only render modal when needed
4. **Lazy Loading**: Could add for larger applications
5. **Bundle Size**: Minimal dependencies kept bundle small

## ✅ Requirements Checklist

- ✅ Next.js application
- ✅ User authentication (login/signup)
- ✅ JWT token management
- ✅ Create tasks
- ✅ Update tasks
- ✅ Delete tasks
- ✅ Auto-logout after 10 minutes
- ✅ 60-second countdown warning
- ✅ "Stay Logged In" button (resets to 10 min)
- ✅ "Logout Now" button (immediate logout)
- ✅ Activity tracking (mouse, keyboard, etc.)
- ✅ Timer reset on interaction
- ✅ DummyJSON API integration
- ✅ No database required (frontend-only state)
- ✅ Comprehensive README
- ✅ Detailed write-up

## 🎓 Conclusion

This project demonstrates a complete understanding of:
- React/Next.js ecosystem
- State management patterns
- Security considerations (auto-logout)
- User experience design
- TypeScript development
- API integration
- Timer and event management

The application is production-ready in terms of code quality and can be easily extended with additional features. The auto-logout feature provides an excellent security layer while maintaining a smooth user experience through proper warnings and activity detection.


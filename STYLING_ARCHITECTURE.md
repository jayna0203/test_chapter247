# 🎨 Styling Architecture Documentation

## Overview

This project uses **CSS Modules** instead of inline Tailwind utility classes for a more maintainable and organized styling approach.

## Why CSS Modules?

### Advantages

1. **Scoped Styles**: No global namespace pollution
2. **Maintainability**: Styles are co-located with components
3. **Readability**: Clean JSX without long className strings
4. **Type Safety**: TypeScript autocomplete for class names
5. **Better Organization**: Separate concerns (logic vs styling)
6. **Reusability**: Easy to share styles across similar components
7. **Performance**: Automatic code splitting and optimization

### Before (Tailwind Utilities)
```tsx
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
  <button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3.5 px-4 rounded-xl hover:from-violet-700 hover:to-fuchsia-700 focus:ring-4 focus:ring-violet-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
    Sign In
  </button>
</div>
```

### After (CSS Modules)
```tsx
<div className={styles.container}>
  <button className={styles.submitButton}>
    Sign In
  </button>
</div>
```

## File Structure

Each component/page follows this pattern:

```
ComponentName/
├── page.tsx (or ComponentName.tsx)
└── ComponentName.module.css
```

### Example: Login Page

**File**: `app/login/page.tsx`
```tsx
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome Back</h1>
        {/* ... */}
      </div>
    </div>
  );
}
```

**File**: `app/login/login.module.css`
```css
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f3ff 0%, #faf5ff 50%, #fdf4ff 100%);
}

.card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  padding: 2.5rem;
  border-radius: 1.5rem;
  /* ... */
}
```

## Component Styling Map

### Pages

| Component | CSS Module | Description |
|-----------|-----------|-------------|
| `app/page.tsx` | `page.module.css` | Home/redirect page with spinner |
| `app/login/page.tsx` | `login.module.css` | Login form with animated background |
| `app/signup/page.tsx` | `signup.module.css` | Signup form with validation |
| `app/dashboard/page.tsx` | `dashboard.module.css` | Main dashboard layout |

### Components

| Component | CSS Module | Description |
|-----------|-----------|-------------|
| `TodoForm.tsx` | `TodoForm.module.css` | Task creation form |
| `TodoList.tsx` | `TodoList.module.css` | Task list with items |
| `LogoutWarningModal.tsx` | `LogoutWarningModal.module.css` | Auto-logout warning dialog |

## Design Tokens

### Colors

```css
/* Primary */
--primary-gradient: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
--primary-light: #c084fc;
--primary-dark: #7c3aed;

/* Background */
--bg-gradient: linear-gradient(135deg, #f5f3ff 0%, #faf5ff 50%, #fdf4ff 100%);
--bg-card: rgba(255, 255, 255, 0.8);

/* Text */
--text-primary: #1f2937;
--text-secondary: #6b7280;
--text-muted: #9ca3af;

/* States */
--error: #ef4444;
--success: #10b981;
--warning: #f59e0b;
```

### Spacing Scale

```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
```

### Border Radius

```css
--radius-sm: 0.5rem;   /* 8px */
--radius-md: 0.75rem;  /* 12px */
--radius-lg: 1rem;     /* 16px */
--radius-xl: 1.5rem;   /* 24px */
--radius-full: 50%;
```

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.15);
```

## Animation Library

### Keyframe Animations

#### 1. Float (Background Blobs)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
```

**Usage**: Floating decorative elements
**Duration**: 3s
**Timing**: ease-in-out infinite

#### 2. Spin (Loading)
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Usage**: Loading spinners
**Duration**: 1s
**Timing**: linear infinite

#### 3. Bounce (Icon)
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

**Usage**: Attention-grabbing elements
**Duration**: 1s
**Timing**: ease-in-out infinite

#### 4. Fade In (Modal)
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Usage**: Element entrance
**Duration**: 0.3s
**Timing**: ease-in-out

#### 5. Slide Up (Modal Content)
```css
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

**Usage**: Modal/card entrance
**Duration**: 0.3s
**Timing**: ease-out

## Component Patterns

### 1. Container Pattern

```css
.container {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### 2. Card Pattern

```css
.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### 3. Button Pattern

```css
.button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.buttonPrimary {
  background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
  color: white;
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);
}

.buttonPrimary:hover {
  background: linear-gradient(135deg, #7c3aed 0%, #c026d3 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
}
```

### 4. Form Input Pattern

```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  outline: none;
  transition: all 0.2s ease;
}

.input:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 640px) { }

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Example: Responsive Form

```css
.form {
  display: flex;
  gap: 1rem;
}

@media (max-width: 640px) {
  .form {
    flex-direction: column;
  }
}
```

## Best Practices

### 1. Naming Conventions

- Use **camelCase** for class names
- Be descriptive but concise
- Follow BEM-inspired patterns for variants

```css
/* Component */
.todoItem { }

/* State */
.todoItemCompleted { }

/* Element */
.todoItemText { }

/* Modifier */
.todoItemDanger { }
```

### 2. Organization

Keep related styles together:

```css
/* Layout */
.container { }
.header { }
.main { }
.footer { }

/* Components */
.card { }
.button { }
.input { }

/* States */
.isActive { }
.isDisabled { }
.isLoading { }

/* Animations */
@keyframes fadeIn { }
@keyframes slideUp { }
```

### 3. Composition

Combine classes in JSX:

```tsx
<div className={`${styles.todoItem} ${completed ? styles.todoItemCompleted : ''}`}>
```

Or use template literals:

```tsx
<p className={`${styles.todoText} ${todo.completed ? styles.todoTextCompleted : ''}`}>
```

### 4. Avoid Inline Styles

Instead of:
```tsx
<div style={{ marginTop: '20px', color: 'red' }}>
```

Use:
```tsx
<div className={styles.errorMessage}>
```

```css
.errorMessage {
  margin-top: 1.25rem;
  color: #ef4444;
}
```

## Global Styles

Keep `globals.css` minimal:

```css
/* Reset and base styles only */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-geist-sans);
}

/* Custom scrollbar */
::-webkit-scrollbar { }

/* Focus styles for accessibility */
button:focus-visible { }
```

## Performance Considerations

1. **Automatic Code Splitting**: CSS modules are automatically split per component
2. **Dead Code Elimination**: Unused styles are removed in production
3. **Minification**: CSS is minified in production builds
4. **Cache Friendly**: Hashed class names enable long-term caching

## Migration Checklist

If converting from Tailwind to CSS Modules:

- [ ] Create `.module.css` file for component
- [ ] Convert utility classes to CSS properties
- [ ] Import CSS module in component
- [ ] Replace `className="..."` with `className={styles....}`
- [ ] Test responsive breakpoints
- [ ] Test hover/focus states
- [ ] Test animations
- [ ] Remove unused Tailwind classes
- [ ] Verify build works
- [ ] Test in browser

## Troubleshooting

### Class names not applying

**Problem**: Styles not showing up
**Solution**: Check import path and className syntax

```tsx
// ❌ Wrong
import styles from './wrong-path.css';
<div className="container">

// ✅ Correct
import styles from './Component.module.css';
<div className={styles.container}>
```

### Styles being overridden

**Problem**: Specificity issues
**Solution**: Increase specificity or use `!important` sparingly

```css
/* Instead of */
.button { color: blue !important; }

/* Use */
.form .button { color: blue; }
```

### Animation not working

**Problem**: Keyframes not defined
**Solution**: Define keyframes in same CSS module

```css
.animated {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Resources

- [CSS Modules GitHub](https://github.com/css-modules/css-modules)
- [Next.js CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**Last Updated**: November 2025  
**Maintainer**: Todo App Team


# 📚 CSS Modules Class Reference

Quick reference guide for all CSS classes in the project.

## 🏠 Home Page (`app/page.module.css`)

| Class | Description |
|-------|-------------|
| `container` | Full-height centered container with gradient background |
| `spinner` | Rotating loading spinner with border animation |

## 🔐 Login Page (`app/login/login.module.css`)

### Layout
| Class | Description |
|-------|-------------|
| `container` | Full-screen container with gradient background |
| `backgroundEffects` | Container for animated background blobs |
| `blob1`, `blob2`, `blob3` | Floating animated background elements |
| `card` | Main login card with glass effect |

### Header
| Class | Description |
|-------|-------------|
| `header` | Centered header section |
| `iconWrapper` | Purple gradient icon container |
| `icon` | Large icon emoji |
| `title` | Gradient text title |
| `subtitle` | Gray subtitle text |

### Form
| Class | Description |
|-------|-------------|
| `form` | Form container with vertical layout |
| `formGroup` | Individual form field group |
| `label` | Bold form field label |
| `inputWrapper` | Wrapper for input with icon |
| `inputIcon` | Left-aligned icon inside input |
| `input` | Styled text/password input |
| `errorBox` | Red error message box with icon |
| `submitButton` | Gradient submit button |
| `buttonContent` | Flexbox for button content |
| `spinner` | Loading spinner for button |

### Footer
| Class | Description |
|-------|-------------|
| `footer` | Bottom links section |
| `footerText` | Gray footer text |
| `footerLink` | Purple link to signup |
| `demoBox` | Demo credentials box |
| `demoTitle` | Demo box title |
| `demoCredentials` | Credentials list container |
| `demoCredential` | Individual credential row |
| `demoValue` | Monospace credential value |

## 📝 Signup Page (`app/signup/signup.module.css`)

### Layout
| Class | Description |
|-------|-------------|
| `container` | Full-screen container with gradient |
| `backgroundEffects` | Animated background container |
| `blob1`, `blob2` | Floating background blobs |
| `card` | Main signup card |

### Header
| Class | Description |
|-------|-------------|
| `header` | Centered header |
| `iconWrapper` | Purple gradient icon container |
| `icon` | Rocket emoji icon |
| `title` | Gradient title text |
| `subtitle` | Gray subtitle |

### Form
| Class | Description |
|-------|-------------|
| `form` | Vertical form layout |
| `formRow` | Two-column grid for name fields |
| `formGroup` | Form field container |
| `label` | Bold field label |
| `input` | Styled input field |
| `errorBox` | Red error message |
| `submitButton` | Gradient submit button |

### Footer
| Class | Description |
|-------|-------------|
| `footer` | Bottom section |
| `footerText` | Gray text |
| `footerLink` | Purple link |
| `noteBox` | Yellow warning box |
| `noteText` | Note box text |

## 📊 Dashboard (`app/dashboard/dashboard.module.css`)

### Layout
| Class | Description |
|-------|-------------|
| `container` | Full-page container with gradient |
| `main` | Main content area |
| `content` | Grid layout for sections |

### Header
| Class | Description |
|-------|-------------|
| `header` | Top navigation bar |
| `headerContent` | Centered header content |
| `userInfo` | User profile section |
| `avatar` | Circular user avatar image |
| `userDetails` | User name and description |
| `logoutButton` | Red logout button |

### Sections
| Class | Description |
|-------|-------------|
| `section` | White card section |
| `sectionTitle` | Bold section title |
| `todoListHeader` | Todo list header with stats |
| `todoListTitle` | "Your Tasks" title |
| `todoStats` | Pending/completed counter |

### Loading
| Class | Description |
|-------|-------------|
| `loader` | Centered loader container |
| `spinner` | Rotating loading spinner |

### Info Badge
| Class | Description |
|-------|-------------|
| `autoLogoutInfo` | Fixed bottom-right info badge |

## ✏️ Todo Form (`components/TodoForm.module.css`)

| Class | Description |
|-------|-------------|
| `form` | Horizontal form layout |
| `input` | Large text input for todo |
| `submitButton` | Purple gradient submit button |

**Responsive**: Stacks vertically on mobile (< 640px)

## ✅ Todo List (`components/TodoList.module.css`)

### Empty State
| Class | Description |
|-------|-------------|
| `emptyState` | Centered empty message |
| `emptyIcon` | Large memo emoji |
| `emptyText` | Gray helper text |

### List
| Class | Description |
|-------|-------------|
| `todoList` | Vertical list container |
| `todoItem` | Individual todo row with hover effect |
| `checkbox` | Purple accent checkbox |
| `todoContent` | Todo text container |
| `todoText` | Todo text |
| `todoTextCompleted` | Strikethrough style for completed |
| `deleteButton` | Red delete button (shows on hover) |

## ⏰ Logout Warning Modal (`components/LogoutWarningModal.module.css`)

### Overlay
| Class | Description |
|-------|-------------|
| `overlay` | Full-screen dark backdrop |
| `modal` | Centered white modal card |

### Header
| Class | Description |
|-------|-------------|
| `header` | Modal header section |
| `icon` | Large animated clock emoji |
| `title` | Bold warning title |
| `description` | Gray description text |

### Countdown
| Class | Description |
|-------|-------------|
| `countdownSection` | Countdown display area |
| `countdownCircle` | Red gradient circle background |
| `countdown` | Large countdown number |
| `countdownLabel` | "seconds remaining" label |

### Actions
| Class | Description |
|-------|-------------|
| `actions` | Button container |
| `stayButton` | Purple "Stay Logged In" button |
| `logoutButton` | Gray "Logout Now" button |

### Footer
| Class | Description |
|-------|-------------|
| `footer` | Bottom info section |
| `footerText` | Small gray text |

## 🎨 Global Styles (`app/globals.css`)

### Resets
- Universal box-sizing
- Margin/padding reset
- Font family

### Custom Scrollbar
- Track: Light gray
- Thumb: Medium gray with hover effect

### Focus Styles
- Purple outline for accessibility
- 2px offset for clarity

### Transitions
- Automatic smooth transitions on color, background, border, transform, opacity

## 🎭 Animations

### float (3s, infinite)
```css
0%, 100% → translateY(0)
50% → translateY(-15px)
```
**Used in**: Background blobs

### spin (1s, infinite)
```css
0° → 360° rotation
```
**Used in**: Loading spinners

### bounce (1s, infinite)
```css
0%, 100% → translateY(0)
50% → translateY(-10px)
```
**Used in**: Warning icon

### fadeIn (0.3s)
```css
opacity: 0 → 1
```
**Used in**: Modal overlay

### slideUp (0.3s)
```css
translateY(20px) opacity: 0 → translateY(0) opacity: 1
```
**Used in**: Modal content, error messages

## 💡 Usage Examples

### Basic Class
```tsx
<div className={styles.container}>
```

### Conditional Class
```tsx
<p className={`${styles.todoText} ${completed ? styles.todoTextCompleted : ''}`}>
```

### Multiple Classes
```tsx
<button className={styles.submitButton}>
```

## 🎯 Common Patterns

### Gradient Button
```css
background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);
```

### Card with Hover
```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
```

### Glass Effect
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Input Focus
```css
border: 2px solid #e5e7eb;
transition: all 0.2s ease;

:focus {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}
```

## 📏 Design Values

### Colors
```
Primary: #8b5cf6, #d946ef
Gray: #1f2937, #374151, #6b7280, #9ca3af, #e5e7eb
Error: #ef4444
Success: #10b981
```

### Spacing
```
0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 2.5rem
```

### Radius
```
0.5rem, 0.75rem, 1rem, 1.5rem, 50%
```

### Font Sizes
```
0.75rem, 0.875rem, 1rem, 1.125rem, 1.5rem, 2.25rem
```

### Font Weights
```
400 (normal), 600 (semibold), 700 (bold)
```

## 🔍 Finding Classes

### By Component
1. Check component file name
2. Look for import: `import styles from './Component.module.css'`
3. Open corresponding `.module.css` file

### By Feature
- **Authentication**: login.module.css, signup.module.css
- **Task Management**: TodoForm.module.css, TodoList.module.css
- **Dashboard**: dashboard.module.css
- **Auto-Logout**: LogoutWarningModal.module.css

### By Style Type
- **Layout**: container, main, content, section
- **Typography**: title, subtitle, text, label
- **Interactive**: button, input, checkbox, link
- **States**: completed, active, disabled, loading
- **Decorative**: icon, avatar, blob, badge

## 🚀 Quick Tips

1. **Autocomplete**: TypeScript provides autocomplete for `styles.`
2. **Renaming**: Use F2 in VS Code to rename across files
3. **Finding Usage**: Use "Find All References" on class names
4. **DevTools**: Classes appear as `ComponentName_className__hash`
5. **Hot Reload**: Changes reflect immediately in dev mode

---

**Total Classes**: 100+  
**Total CSS Lines**: ~800  
**Modules**: 7 files  
**Animations**: 5 keyframes  

Happy styling! 🎨


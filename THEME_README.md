# React TypeScript Theme System

This project includes a comprehensive theme system with **Red Theme** and **Dark Black Theme** options.

## 🎨 Color Palettes

### Red Theme
- **Primary**: `#dc2626` - Main red color
- **Secondary**: `#ef4444` - Lighter red for accents
- **Accent**: `#fca5a5` - Soft red for highlights
- **Light**: `#fecaca` - Very light red
- **Dark**: `#991b1b` - Darker red
- **Darker**: `#7f1d1d` - Deepest red

### Dark Black Theme
- **Primary**: `#0f0f0f` - Deepest black
- **Secondary**: `#1a1a1a` - Dark black
- **Tertiary**: `#262626` - Medium dark
- **Accent**: `#404040` - Lighter accent
- **Light**: `#525252` - Light gray
- **Lighter**: `#737373` - Very light gray

## 🚀 Features

- **Theme Context**: React context for managing theme state
- **Local Storage**: Theme preference is saved and restored
- **Smooth Transitions**: CSS transitions for theme switching
- **Responsive Design**: Mobile-friendly theme toggle
- **CSS Variables**: Easy to customize colors

## 📁 File Structure

```
src/
├── contexts/
│   └── ThemeContext.tsx      # Theme management context
├── components/
│   ├── ThemeToggle.tsx       # Theme toggle component
│   └── ThemeToggle.css       # Theme toggle styles
├── styles/
│   └── colors.css            # Color variables and theme classes
├── App.tsx                   # Main app with theme integration
├── App.css                   # App styles using theme variables
├── index.tsx                 # App entry with ThemeProvider
└── index.css                 # Global styles with theme variables
```

## 🎯 Usage

### Using the Theme Hook

```tsx
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('red')}>Set Red Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
    </div>
  );
}
```

### Adding Theme Toggle

```tsx
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div>
      <ThemeToggle />
      {/* Your app content */}
    </div>
  );
}
```

### Customizing Colors

Edit `src/styles/colors.css` to modify the color palette:

```css
:root {
  --red-primary: #your-custom-red;
  --black-primary: #your-custom-black;
  /* ... other colors */
}
```

## 🎨 CSS Variables Available

### Background Colors
- `var(--bg-primary)` - Main background
- `var(--bg-secondary)` - Secondary background
- `var(--bg-tertiary)` - Tertiary background
- `var(--bg-accent)` - Accent background

### Text Colors
- `var(--text-primary)` - Primary text
- `var(--text-secondary)` - Secondary text
- `var(--text-muted)` - Muted text
- `var(--text-inverse)` - Inverse text

### Border Colors
- `var(--border-primary)` - Primary borders
- `var(--border-secondary)` - Secondary borders
- `var(--border-accent)` - Accent borders

### Shadow Colors
- `var(--shadow-light)` - Light shadows
- `var(--shadow-medium)` - Medium shadows
- `var(--shadow-heavy)` - Heavy shadows

## 🔧 Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🌟 Theme Switching

The theme toggle button is positioned in the top-right corner and allows users to:
- Switch between Red and Dark themes
- See the current theme name
- Have their preference automatically saved
- Experience smooth transitions between themes

## 📱 Responsive Design

- Mobile-friendly theme toggle
- Responsive color schemes
- Touch-friendly button sizes
- Optimized for all screen sizes

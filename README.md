# Dugsiiye React.js Learning Course

A comprehensive, structured learning curriculum for mastering React.js from fundamentals to advanced concepts. This course contains organized lessons and hands-on exercises designed to build a strong foundation in modern React development.

## Overview

**Dugsiiye React.js** is a complete learning path featuring progressive lessons and practical exercises. Each lesson focuses on specific React concepts with accompanying exercises to reinforce learning. All projects use React and Vite for an optimal development experience with fast refresh and hot module reloading.

## Lesson Structure

### Beginner Lessons
- **exercise-1 through exercise-9**: Foundational React concepts including components, props, state, event handling, and conditional rendering

### Intermediate Lessons
- **Rendering/**: React rendering patterns, component structure, and best practices
- **useState/**: Managing component state with the useState hook
- **useEffect/**: Side effects and lifecycle management with useEffect hook

### Advanced Lessons
- **reducer/**: Introduction to useReducer for complex state management patterns
- **exercise-10 (UserList)**: Advanced component composition and list rendering with state
- **exercise-11 (UserLogin)**: Form handling, validation, and authentication patterns
- **exercise-12 (Counter)**: Interactive state management with useState
- **exercise-13 (CounterWithReducer)**: Same functionality using useReducer pattern
- **exercise-14+**: Real-world application patterns and advanced scenarios

### Capstone Project
- **src/**: Full-featured application integrating all concepts:
  - `Header.jsx` / `Footer.jsx`: Layout and navigation
  - `TodoList.jsx`: Todo management with state handling
  - `Blogs.jsx` / `Post.jsx`: Content display and rendering
  - `App.jsx`: Main application component orchestrating all features

## Technology Stack

- **React**: A JavaScript library for building user interfaces with components
- **Vite**: Next-generation frontend build tool providing fast HMR
- **ESLint**: Code quality and consistency enforcement
- **JavaScript (ES6+)**: Modern JavaScript features throughout

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running a Project

1. Navigate to a specific project directory:
```bash
cd exercise-1
# or
cd useState
# or
cd src (for main application)
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL displayed in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

## Learning Outcomes

Through these projects, you will master:
- ✓ React component creation and composition
- ✓ State management with hooks (useState, useReducer)
- ✓ Side effects with useEffect
- ✓ Event handling and form management
- ✓ Component lifecycle and optimization
- ✓ Advanced state patterns and architectural decisions
- ✓ Modern development workflow with Vite

## Project Workflow

Each project includes:
- Isolated `src/` directory with React components
- `package.json` with necessary dependencies
- `vite.config.js` for build configuration
- `eslint.config.js` for code quality standards
- `index.html` as the entry point

## Notes

- Hot Module Replacement (HMR) is enabled for all projects, allowing real-time code updates without page refresh
- ESLint rules are configured to enforce code consistency and best practices
- Each exercise builds upon previous concepts, creating a progressive learning path

## License

Open source - Available for educational and learning purposes

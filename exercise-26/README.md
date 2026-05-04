# 📚 Blog Post Management Application

A modern, interactive blog platform built with **React**, **React Router**, and **Context API**. Users can browse, search, and create blog posts with a beautiful, responsive user interface.

---

## 🎯 Project Overview

This application demonstrates core React concepts including:
- **Component Architecture** - Modular, reusable components
- **State Management** - Global state using Context API
- **Routing** - Dynamic page navigation with React Router
- **Form Handling** - Controlled components for post creation
- **Search & Filter** - Real-time post filtering
- **Authentication** - Protected routes for authenticated users

---

## ✨ Key Features

### 🏠 **Home Page**
- Display all blog posts (3 default + user-created)
- Real-time search functionality
- Filter posts by title or content
- Clickable post cards with hover animations
- Post statistics (showing count of filtered/total posts)
- Responsive grid layout (1-3 columns)

### 📖 **Post Details Page**
- Full post content display
- Post metadata (creation date)
- Beautiful typography and formatting
- "Read More" navigation from home
- Back button for easy navigation
- Share functionality placeholder

### ✍️ **Create Posts Page** (Protected)
- Title input field
- Content textarea
- Form validation
- Automatic redirect to Home after creation
- Requires user authentication

### 🔐 **Login Page**
- Simple authentication interface
- Redirects authenticated users to CreatePosts
- Gradient styled login button
- Clean, minimal design

### 🎨 **Navigation Bar**
- Sticky header with smooth animations
- Dynamic links based on authentication status
- Home, Create Posts (if authenticated), Logout buttons
- Gradient branding text

---

## 🏗️ Project Structure

```
exercise-26/
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Post feed with search
│   │   ├── PostDetail.jsx     # Individual post view
│   │   ├── CreatePosts.jsx    # Post creation form
│   │   └── Login.jsx          # Authentication page
│   ├── App.jsx                # Main app component with navbar
│   ├── authContext.jsx        # Global state management
│   ├── ProtectedRoute.jsx     # Route protection wrapper
│   ├── router.jsx             # Route configuration
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md                  # This file
```

---

## 🔄 User Flow

```
┌─────────────────────────────────────────┐
│        HOME PAGE (Public)                │
│  - View 3 default sample posts           │
│  - Search posts in real-time             │
│  - Click cards to view details           │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│    POST DETAIL PAGE (Public)             │
│  - See full post content                 │
│  - View creation date                    │
│  - Return to home                        │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│      LOGIN PAGE (Public)                 │
│  - Click login to authenticate           │
│  - Redirects to Home after login         │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│   CREATE POSTS PAGE (Protected)          │
│  - Fill title and content                │
│  - Submit to create new post             │
│  - Redirects to Home with new post       │
└─────────────────────────────────────────┘
                ↓
┌─────────────────────────────────────────┐
│    HOME PAGE (Updated)                   │
│  - See your new post + samples           │
│  - Can create more posts                 │
│  - Can logout anytime                    │
└─────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18+** - UI library for building components
- **React Router v6** - Client-side routing and navigation
- **Context API** - Global state management without Redux

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Gradient Effects** - Modern, attractive UI design
- **Responsive Grid** - Mobile-first responsive layouts

### Build Tools
- **Vite** - Fast development server and build tool
- **ESLint** - Code quality and consistency

---

## 📋 Default Sample Posts

The application comes with 3 pre-loaded sample posts:

1. **Introduction to React**
   - Overview of React fundamentals
   - Component-based architecture basics

2. **Getting Started with React Router**
   - Navigation in single-page applications
   - Route configuration and dynamic routing

3. **State Management with React Context**
   - Global state management patterns
   - Context API usage examples

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
```bash
cd exercise-26
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📖 How to Use

### Browsing Posts
1. Visit the Home page (default landing page)
2. See 3 default sample posts displayed in a grid
3. Use the search bar to filter posts by title or content
4. Click any post card to view full details
5. Click "Back to Posts" to return to the home feed

### Creating Posts (Requires Login)
1. Click "Login" button in the navbar
2. Click "Login" on the login page
3. After authentication, click "Create Posts" in navbar
4. Fill in the post title and content
5. Click "Create Post" button
6. You'll be redirected to Home where your new post appears
7. Click "Logout" to end your session

### Searching Posts
1. Type in the search bar on Home page
2. Posts filter in real-time by:
   - Post title (case-insensitive)
   - Post content (case-insensitive)
3. Post count updates to show filtered results

---

## 🔐 Authentication Flow

### State Management
```javascript
// authContext provides:
- isAuthenticated: boolean (false by default)
- posts: array (user-created posts)
- login(): Sets isAuthenticated to true
- logout(): Sets isAuthenticated to false
- addPost(): Adds new post to posts array
```

### Protected Routes
- **CreatePosts page**: Only accessible when `isAuthenticated === true`
- Unauthenticated users trying to access are redirected to login
- Authentication state persists during the session

---

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (from-blue-600 to-blue-700)
- **Secondary**: Emerald gradient (to-emerald-600)
- **Background**: Slate gradient (slate-50 to white)
- **Accents**: Red for logout, neutral grays for text

### Interactive Elements
- Hover animations on post cards
- Scale transformation on hover
- Smooth color transitions
- Shadow effects on focus
- Active state button scaling

### Responsive Breakpoints
- **Mobile**: 1 column grid
- **Tablet**: 2 column grid (md breakpoint)
- **Desktop**: 3 column grid (lg breakpoint)

---

## 📚 Component Details

### App.jsx
Main layout component containing:
- Sticky navigation bar
- Dynamic link rendering based on auth state
- Outlet for child routes

### Home.jsx
Displays post feed with:
- Grid layout of post cards
- Search input with real-time filtering
- Post statistics
- Click handlers for navigation

### PostDetail.jsx
Shows individual post with:
- Full content display
- Post metadata
- Back navigation
- Share functionality placeholder

### CreatePosts.jsx
Post creation form with:
- Title input validation
- Content textarea
- Form submission handler
- Context API integration

### Login.jsx
Authentication page with:
- Login button
- Auth context integration
- Redirect for authenticated users

### authContext.jsx
Global state provider with:
- Authentication state
- Posts array
- Login/logout functions
- addPost function

### ProtectedRoute.jsx
Route wrapper that:
- Checks authentication status
- Redirects unauthenticated users to login
- Renders protected component if authenticated

---

## 🧪 Testing the Application

### Test Scenario 1: Browse Default Posts
1. Navigate to Home page
2. Verify 3 sample posts appear
3. Click on any post
4. Verify full content displays on detail page

### Test Scenario 2: Search Functionality
1. On Home page, type in search bar
2. Verify posts filter by title/content
3. Clear search to show all posts
4. Verify post count updates correctly

### Test Scenario 3: Create Post Flow
1. Click "Login" button
2. Click "Login" on login page
3. Click "Create Posts" in navbar
4. Fill in title and content
5. Click "Create Post"
6. Verify redirect to Home
7. Verify new post appears at top of grid

### Test Scenario 4: Logout
1. Click "Logout" button
2. Verify redirect to home page
3. Verify "Create Posts" link disappears
4. Verify "Login" button reappears

---

## 🔗 Routes

| Route | Component | Protected | Description |
|-------|-----------|-----------|-------------|
| `/` | Home | ❌ No | Post feed and search |
| `/post/:id` | PostDetail | ❌ No | Individual post view |
| `/CreatePosts` | CreatePosts | ✅ Yes | Post creation form |
| `/login` | Login | ❌ No | Authentication page |

---

## 💡 Learning Outcomes

This project demonstrates:

✅ **React Concepts**
- Functional components with hooks
- useState for local state management
- useContext for global state
- useNavigate for programmatic routing

✅ **React Router**
- Route configuration and nesting
- Dynamic route parameters
- Programmatic navigation
- Protected/private routes

✅ **Context API**
- Creating context with createContext
- Provider pattern
- Multiple state values in context
- useContext hook usage

✅ **Form Handling**
- Controlled inputs
- Form validation
- Form submission

✅ **Styling & UI/UX**
- Tailwind CSS utilities
- Responsive design patterns
- Animation and transitions
- Visual hierarchy

---

## 🐛 Known Limitations

- Posts are stored in memory (cleared on page refresh)
- No backend API integration
- No image upload for posts
- Simple authentication (no password verification)
- Search is case-insensitive only

---

## 📦 Future Enhancements

- [ ] Backend API integration (Node.js/Express)
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] User profiles with profile pictures
- [ ] Comments and likes on posts
- [ ] Post categories and tags
- [ ] Rich text editor for post content
- [ ] Post editing and deletion
- [ ] User authentication with JWT
- [ ] Dark mode toggle
- [ ] Post publishing dates and timestamps

---

## 📝 License

This project is part of the dugsiiye-reactjs course. Free to use for educational purposes.

---

## 👨‍💻 Author

Created as a learning project to demonstrate React, React Router, and Context API concepts.

---

## 📧 Support

For issues or questions about this project, please refer to the main course documentation.

---

**Happy Coding! 🚀**

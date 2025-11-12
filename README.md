# Task Management Application

A modern, responsive task management application built with React, TypeScript, and Redux Toolkit. This application simulates a full-stack experience using Mock Service Worker (MSW) for API mocking.

## 🚀 Features

### Core Functionality
- **User Authentication**: Mocked login system with JWT tokens
- **Task Management**: Full CRUD operations for tasks
- **Task Status Tracking**: Pending, In Progress, and Completed states
- **Real-time Updates**: Instant UI updates with optimistic rendering
- **Responsive Design**: Mobile-friendly interface

### UI/UX Features
- **Dark Mode Toggle**: Switch between light and dark themes
- **Task Filtering**: Filter tasks by status (All, Pending, In Progress, Completed)
- **Empty States**: Helpful empty state messages and actions
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: User-friendly error messages
- **Form Validation**: Client-side validation for task creation/editing

### Technical Features
- **State Persistence**: Authentication and tasks persist across browser sessions
- **Mock API**: Complete backend simulation using MSW
- **Type Safety**: Full TypeScript implementation
- **Modern React**: Hooks, functional components, and modern patterns
- **Redux Toolkit**: Efficient state management with RTK Query patterns

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **API Mocking**: Mock Service Worker (MSW)
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Demo Credentials

The application uses mocked authentication. Use these credentials to log in:

- **Username**: `test`
- **Password**: `test123`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard.tsx     # Main dashboard component
│   ├── Login.tsx         # Authentication form
│   ├── Layout.tsx        # App layout with navigation
│   ├── TaskForm.tsx      # Task creation/editing modal
│   ├── TaskList.tsx      # Task list container
│   ├── TaskItem.tsx      # Individual task component
│   ├── TaskFilters.tsx   # Task filtering controls
│   ├── EmptyState.tsx    # Empty state component
│   └── LoadingSpinner.tsx # Loading indicator
├── store/                # Redux store configuration
│   ├── store.ts          # Store setup
│   └── slices/           # Redux slices
│       ├── authSlice.ts  # Authentication state
│       └── tasksSlice.ts # Tasks state
├── services/             # API services
│   └── api.ts           # Axios configuration and API calls
├── mocks/               # Mock Service Worker setup
│   ├── handlers.ts      # API request handlers
│   └── browser.ts       # MSW browser setup
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared types and interfaces
├── App.tsx              # Main app component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🔌 Mock API Endpoints

The application uses Mock Service Worker to simulate backend API calls:

### Authentication
- `POST /api/login` - User login
  - **Request**: `{ username: string, password: string }`
  - **Response**: `{ user: User, token: string }`

### Tasks
- `GET /api/tasks` - Fetch all tasks
  - **Response**: `Task[]`

- `POST /api/tasks` - Create new task
  - **Request**: `{ title: string, description: string, status: string }`
  - **Response**: `Task`

- `PUT /api/tasks/:id` - Update task
  - **Request**: `{ title?: string, description?: string, status?: string }`
  - **Response**: `Task`

- `DELETE /api/tasks/:id` - Delete task
  - **Response**: `{ message: string }`

## 🎨 Styling and Theming

The application uses Tailwind CSS with a custom design system:

- **Color Palette**: Primary blue theme with semantic colors
- **Dark Mode**: Automatic dark mode detection with manual toggle
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component Library**: Reusable button and input styles
- **Animations**: Smooth transitions and loading states

## 🔄 State Management

### Redux Store Structure
```typescript
{
  auth: {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
  },
  tasks: {
    tasks: Task[]
    isLoading: boolean
    error: string | null
  }
}
```

### State Persistence
- **Authentication**: JWT token and user data stored in localStorage
- **Dark Mode**: Theme preference stored in localStorage
- **Auto-login**: User session persists across browser refreshes

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)

#### Option 1: Deploy from GitHub
1. Push to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/task-management-app.git
   git push -u origin main
   ```
2. Go to `https://vercel.com` → New Project → Import your repo → Deploy (Vite is auto-detected)
3. Your app will be live at `https://your-app-name.vercel.app`

#### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

#### Option 1: Drag & Drop
1. Build the project
   ```bash
   npm run build
   ```
2. Drag the `dist` folder onto the Netlify dashboard

#### Option 2: Connect GitHub
- Build command: `npm run build`
- Publish directory: `dist`

### Deploy with Docker

#### Local Docker Build
```bash
docker build -t task-management-app .
docker run -p 3000:80 task-management-app
```
Open `http://localhost:3000`

#### Docker Compose
```bash
docker-compose up -d
```
Open `http://localhost:3000`

### Environment Configuration (Production)
Create a `.env.production` (or set provider env vars):
```env
VITE_API_URL=/api
VITE_APP_TITLE=Task Management App
VITE_APP_VERSION=1.0.0
```

### MSW in Production
- The service worker is always enabled and points to `/mockServiceWorker.js`.
- Ensure `public/mockServiceWorker.js` is deployed at the site root.
- If your app is served from a subpath (e.g., `/app`), update `serviceWorker.url` in `src/main.tsx` accordingly (e.g., `/app/mockServiceWorker.js`).

### SPA Routing
- Vercel: handled automatically
- Netlify: add a `_redirects` file with `/* /index.html 200` (if needed)
- Nginx: see `nginx.conf` in the repo (uses `try_files` to `index.html`)

### Performance & Security
- Static assets are cached aggressively by Nginx config in this repo
- Security headers are included (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)

### Troubleshooting
1. 404 on refresh: ensure SPA routing is configured (see above)
2. Build failures: check Node 18+, reinstall modules, fix TS errors
3. Env vars not working: must start with `VITE_`, rebuild after changes

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Testing
- Tools: Vitest + Testing Library (jsdom environment)
- Commands:
  - `npm run test` – run tests in watch mode
  - `npm run test:ui` – Vitest UI
  - `npm run test:coverage` – coverage report

What’s covered:
- Redux slices: `authSlice` and `tasksSlice` unit tests
- Components: `Login`, `TaskFilters`, `TaskItem`, `LoadingSpinner`
- Test utilities: `src/test/test-utils.tsx` provides render with Redux + Router

Implementation notes:
- Global types for `vi` are enabled via `src/test/vitest-globals.d.ts`
- Test setup lives in `src/test/setup.ts` (extends jest-dom and silences noisy logs)
- MSW browser worker is used by the app; tests don’t rely on network calls for the current suite

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (if configured)
- **Component Structure**: Modular, reusable components

## 🔧 Configuration

### Environment Variables
Create a `.env` file for custom configuration:
```env
VITE_API_URL=http://localhost:3000/api
```

### MSW Configuration
Mock Service Worker is automatically enabled in development mode. The handlers are defined in `src/mocks/handlers.ts`.

## 🎯 Future Enhancements

### Planned Features
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Task search and sorting
- [ ] Bulk operations
- [ ] Task templates
- [ ] Export functionality
- [ ] Offline support
- [ ] Real-time collaboration

### Technical Improvements
- [ ] Unit tests with Jest and React Testing Library
- [ ] E2E tests with Cypress
- [ ] Performance monitoring
- [ ] Error boundary implementation
- [ ] PWA capabilities
- [ ] Docker containerization

## 📝 License

This project is created for educational purposes as part of a technical assignment.

## 🤝 Contributing

This is a demonstration project, but suggestions and improvements are welcome!

---

**Note**: This application is a frontend-only implementation with mocked backend services. In a production environment, you would replace the MSW handlers with actual API calls to a backend service.

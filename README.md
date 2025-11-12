# TaskFlow

<img width="500" height="500" alt="Abstract Task Manager App Logo Efficiency" src="https://github.com/user-attachments/assets/d0c33677-263f-4a45-b462-50bc98a32a74" />


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




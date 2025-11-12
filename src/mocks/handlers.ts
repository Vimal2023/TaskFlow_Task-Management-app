import { http, HttpResponse } from 'msw'
import { Task, User } from '../types'

// Mock user data
const mockUser: User = {
  id: '1',
  username: 'test',
  email: 'test@example.com',
}

// Mock tasks data
let mockTasks: Task[] = [
  {
  id: '1',
  title: 'Set up project structure',
  description: 'Initialize the React and TypeScript environment with proper folder setup and configurations',
  status: 'completed',
  createdAt: new Date('2024-02-01T09:00:00Z').toISOString(),
  updatedAt: new Date('2024-02-01T10:30:00Z').toISOString(),
},
{
  id: '2',
  title: 'Integrate task filtering',
  description: 'Implement filters for task status and priority with dynamic rendering',
  status: 'in-progress',
  createdAt: new Date('2024-02-02T11:00:00Z').toISOString(),
  updatedAt: new Date('2024-02-02T14:45:00Z').toISOString(),
},
{
  id: '3',
  title: 'Add task analytics dashboard',
  description: 'Develop an interactive dashboard showing task completion stats using charts',
  status: 'pending',
  createdAt: new Date('2024-02-03T08:30:00Z').toISOString(),
  updatedAt: new Date('2024-02-03T08:30:00Z').toISOString(),
},

]

// Generate a simple JWT-like token
const generateToken = (): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({ 
    sub: mockUser.id, 
    username: mockUser.username,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  }))
  const signature = btoa('mock-signature')
  return `${header}.${payload}.${signature}`
}

export const handlers = [
  // Auth endpoints
  http.post('/api/login', async ({ request }) => {
    const { username, password } = await request.json() as { username: string; password: string }
    
    // Simulate authentication
    if (username === 'test' && password === 'test123') {
      const token = generateToken()
      return HttpResponse.json({
        user: mockUser,
        token,
      })
    }
    
    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    )
  }),

  // Tasks endpoints
  http.get('/api/tasks', () => {
    return HttpResponse.json(mockTasks)
  }),

  http.post('/api/tasks', async ({ request }) => {
    const taskData = await request.json() as Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
    
    const newTask: Task = {
      ...taskData,
      id: (mockTasks.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    
    mockTasks.push(newTask)
    return HttpResponse.json(newTask, { status: 201 })
  }),

  http.put('/api/tasks/:id', async ({ request, params }) => {
    const { id } = params
    const updateData = await request.json() as Partial<Task>
    
    const taskIndex = mockTasks.findIndex(task => task.id === id)
    
    if (taskIndex === -1) {
      return HttpResponse.json(
        { message: 'Task not found' },
        { status: 404 }
      )
    }
    
    const updatedTask: Task = {
      ...mockTasks[taskIndex],
      ...updateData,
      updatedAt: new Date().toISOString(),
    }
    
    mockTasks[taskIndex] = updatedTask
    return HttpResponse.json(updatedTask)
  }),

  http.delete('/api/tasks/:id', async ({ params }) => {
    const { id } = params
    
    const taskIndex = mockTasks.findIndex(task => task.id === id)
    
    if (taskIndex === -1) {
      return HttpResponse.json(
        { message: 'Task not found' },
        { status: 404 }
      )
    }
    
    mockTasks.splice(taskIndex, 1)
    return HttpResponse.json({ message: 'Task deleted successfully' })
  }),
]

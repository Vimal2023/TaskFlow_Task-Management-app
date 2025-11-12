import reducer, { fetchTasks, createTask, updateTask, deleteTask } from '../../slices/tasksSlice'
import { TasksState, Task } from '../../../types'

describe('tasksSlice', () => {
  const initialState: TasksState = {
    tasks: [],
    isLoading: false,
    error: null,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should set loading on fetchTasks.pending', () => {
    const state = reducer(initialState, { type: fetchTasks.pending.type })
    expect(state.isLoading).toBe(true)
  })

  it('should set tasks on fetchTasks.fulfilled', () => {
    const payload: Task[] = [
      { id: '1', title: 't', description: 'd', status: 'pending', createdAt: '', updatedAt: '' }
    ]
    const state = reducer(initialState, { type: fetchTasks.fulfilled.type, payload })
    expect(state.tasks).toHaveLength(1)
  })

  it('should append task on createTask.fulfilled', () => {
    const payload: Task = { id: '1', title: 't', description: 'd', status: 'pending', createdAt: '', updatedAt: '' }
    const state = reducer(initialState, { type: createTask.fulfilled.type, payload })
    expect(state.tasks).toHaveLength(1)
  })

  it('should update task on updateTask.fulfilled', () => {
    const pre: TasksState = { ...initialState, tasks: [{ id: '1', title: 't', description: 'd', status: 'pending', createdAt: '', updatedAt: '' }] }
    const payload: Task = { id: '1', title: 't2', description: 'd', status: 'completed', createdAt: '', updatedAt: '' }
    const state = reducer(pre, { type: updateTask.fulfilled.type, payload })
    expect(state.tasks[0].title).toBe('t2')
    expect(state.tasks[0].status).toBe('completed')
  })

  it('should remove task on deleteTask.fulfilled', () => {
    const pre: TasksState = { ...initialState, tasks: [{ id: '1', title: 't', description: 'd', status: 'pending', createdAt: '', updatedAt: '' }] }
    const state = reducer(pre, { type: deleteTask.fulfilled.type, payload: '1' })
    expect(state.tasks).toHaveLength(0)
  })
})


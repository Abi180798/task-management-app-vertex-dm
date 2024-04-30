import { SetState, create } from 'zustand'
import { TaskProps } from '../models/task'

export interface StateProps {
  tasks: TaskProps[]
  addTask: (payload: TaskProps) => void
  editTask: (payload: TaskProps) => void
  deleteTask: (id: TaskProps['id']) => void
}

export const useTaskStore = create<StateProps>((set: SetState<StateProps>) => ({
  tasks: [],
  addTask: (payload: TaskProps) => set((state: StateProps) => ({ ...state, tasks: [...state.tasks, payload] })),
  editTask: (payload: TaskProps) => set((state: StateProps) => ({
    ...state, tasks: state.tasks.map(task =>
      task.id === payload.id ? { ...task, ...payload } : task
    )
  })),
  completeTask: (payload: TaskProps) => set((state: StateProps) => ({
    ...state, tasks: state.tasks.map(task =>
      task.id === payload.id ? { ...task, ...payload } : task
    )
  })),
  deleteTask: (id: TaskProps['id']) => set((state: StateProps) => ({ ...state, tasks: state.tasks.filter((r) => r.id !== id) })),
}))
export interface TaskProps {
  id: string
  title?: string
  label?: 'open' | 'doing' | 'done'
  dueDate?: string
  isComplete?: boolean
}
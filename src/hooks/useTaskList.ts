import {useContext} from 'react'
import {ITasksContext, TasksContext} from '../context/TasksContext'
// testar  o git
export function useTaskList(): ITasksContext {
  const context = useContext(TasksContext)
  return context
}

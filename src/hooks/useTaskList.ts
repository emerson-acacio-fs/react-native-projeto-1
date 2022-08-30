import {useContext} from 'react'
import {ITasksContext, TasksContext} from '../context/TasksContext'

export function useTaskList(): ITasksContext {
  const context = useContext(TasksContext)
  return context
}

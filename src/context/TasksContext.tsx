import React, {ReactElement, useMemo, useState} from 'react'

interface ITask {
  id: string
  title: string
}
interface ITasksProviderProps {
  children: ReactElement
}
interface ITasksContext {
  tasks: ITask[]
  addTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
)

export const TasksProvider = ({children}: ITasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const value = useMemo(() => ({tasks, addTasks: setTasks}), [tasks])
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

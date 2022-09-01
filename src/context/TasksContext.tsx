import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {ReactElement, useEffect, useMemo, useState} from 'react'

const tasksData = '@MyTasks:Tasks'
interface ITask {
  id: string
  title: string
}
interface ITasksProviderProps {
  children: ReactElement
}
export interface ITasksContext {
  tasks: ITask[]
  addTask(task: ITask): Promise<void>
  removeTask(id: string): Promise<void>
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
)

export const TasksProvider = ({children}: ITasksProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData)
      if (taskList) {
        setTasks(JSON.parse(taskList))
      }
    }
    loadTasks()
  }, [])

  const value = useMemo(
    () => ({
      tasks,
      addTask: async (task: ITask) => {
        try {
          const newTaskList = [...tasks, task]
          await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
          setTasks(newTaskList)
        } catch (e) {
          throw new Error(e as string)
        }
      },
      removeTask: async (id: string) => {
        try {
          const newTaskList = tasks.filter(task => task.id !== id)
          await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
          setTasks(newTaskList)
        } catch (e) {
          throw new Error(e as string)
        }
      },
    }),
    [tasks],
  )
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

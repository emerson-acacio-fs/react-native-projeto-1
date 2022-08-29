import React from 'react'
import {TasksProvider} from './src/context/TasksContext'
import Home from './src/Home/Home'

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  )
}

export default App

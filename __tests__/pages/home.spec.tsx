import {act} from '@testing-library/react-hooks'
import {
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react-native'
import React from 'react'
import {TasksProvider} from '../../src/context/TasksContext'
import Home from '../../src/Home/Home'
import {useTaskList} from '../../src/hooks/useTaskList'
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('Home page', () => {
  it('Renders correctly', () => {
    render(<Home />)
    const element = screen.getByPlaceholderText('Nova tarefa...')
    expect(element).toBeDefined()
    expect(element.props.placeholder).toBeTruthy()
  })

  it('verifica a insercao de um item na lista de tarefas', async () => {
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    })

    const data = {id: 'Task01', title: 'Task01'}

    await act(() => result.current.addTask(data))

    expect(result.current.tasks).toBeTruthy()
  })
  it('verifica se o click no botão insere um item na lista de tarefas', async () => {
    const {getByPlaceholderText, getByTestId, getByText} = render(<Home />, {
      wrapper: TasksProvider,
    })

    const inputNewTask = getByPlaceholderText('Nova tarefa...')
    const button = getByTestId('teste1')

    act(() => fireEvent.changeText(inputNewTask, 'Taskaaaa'))

    await act(async () => {
      await fireEvent.press(button)
    })
    const taskElement = getByText('Taskaaaa')
    expect(taskElement).toBeTruthy()
  })
})

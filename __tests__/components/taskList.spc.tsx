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
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('TaskList', () => {
  it('verifica se o item é removido da lista de tarefas', async () => {
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
    await act(async () => {
      await fireEvent.press(taskElement)
    })
    expect(taskElement).toBeTruthy()
  })
})

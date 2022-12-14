import React, {useState} from 'react'
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import TaskList from '../components/TaskList'
import {useTaskList} from '../hooks/useTaskList'

const Home = () => {
  const [newTask, setNewTask] = useState('')

  const {addTask} = useTaskList()

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    }

    addTask(data)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Oi</Text>
        <TextInput
          placeholderTextColor="#555"
          style={styles.input}
          placeholder="Nova tarefa..."
          onChangeText={setNewTask}
        />
        <TouchableOpacity
          testID="teste1"
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleAddNewTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas Tarefas</Text>
        <TaskList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {color: '#f1f1f1', fontSize: 24, fontWeight: 'bold'},
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {color: '#121214', fontSize: 18, fontWeight: 'bold'},
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Home

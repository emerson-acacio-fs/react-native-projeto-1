import React from 'react'
import {Alert, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {useTaskList} from '../../hooks/useTaskList'

export default function TaskList() {
  const {tasks, removeTask} = useTaskList()
  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa?', [
      {text: 'Cancelar'},
      {
        text: 'Excluir',
        onPress: () => {
          removeTask(id)
        },
      },
    ])
  }
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.buttonTask}
          onPress={() => handleRemoveTask(item.id)}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
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

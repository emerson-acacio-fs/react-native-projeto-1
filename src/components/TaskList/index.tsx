import React, {useContext} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {TasksContext} from '../../context/TasksContext'

export default function TaskList() {
  const {tasks} = useContext(TasksContext)
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.buttonTask}>
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

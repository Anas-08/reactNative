import { View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commonStyles } from '../../common/styles/styles'
import { styles } from './style'
import { addTodo, deleteTodo, getTodos, updateTodo } from '../../redux/actions/todo/todoAction'


const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')
    const [edit, setEdit] = useState(null)
    useEffect(() => {
      dispatch(getTodos())
    }, [])

    useEffect(() => {
      dispatch(getTodos())
    }, [edit])
  
    console.log("todos from the reducer ---> ", todos)
  
    function handleAdd(){
      console.log("clicked on add ---> ")
      console.log(newTodo)
      if(addTodo != ''){
        dispatch(addTodo(newTodo))
        setNewTodo('')
      }
    }
  
    function handleTodoDelete(id) {
      console.log("clicked on delete ---> ", id)
      Alert.alert('Delete', 'Are you sure you want to delete todo ? ', [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(deleteTodo(id))
          }
        },
      ])
    }
  
    function handleTodoEdit(id, data){
      console.log("clicked on Edit id ---> ", id)
      console.log("clicked on Edit data ---> ", data)
      setNewTodo(data)
      setEdit(id)
    }
  
    function handleUpdateTodo(){
      if(setEdit !== null){
        dispatch(updateTodo(edit, newTodo))
        setNewTodo('');
        setEdit(null);
      }
    }
  
    function handleSubmit() {
      if(edit == null){
        handleAdd()
      }else{
        handleUpdateTodo()
      }
    }

    
  const TodoList = (props) => (
    <View style={styles.cardProduct}>
    <Text style={styles.productTitle}>  {props.todos.todo}</Text>
    <View style={styles.buttonContainer} >
      <TouchableOpacity style={[styles.button]} onPress={() => { handleTodoEdit(props.todos.id, props.todos.todo) }} >
        <Text style={[styles.buttonText]} >Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => handleTodoDelete(props.todos.id)} >
        <Text style={[styles.buttonText]} >Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const renderTodos = ({ item }) => <TodoList todos={item} />

return (
    <View style={styles.container} >
      <Text style={[commonStyles.textCenter, commonStyles.paddingUpDown, commonStyles.mediumfont]} >Todos</Text>
      <View style={[styles.inputContainer, { borderWidth: 1}]} >
        <TextInput  
          onChangeText={setNewTodo}
          value={newTodo}
        //   style={[styles.input, {borderWidth: 1}]}
        style={{ borderWidth: 1 }}
          placeholder='enter a todo '
        />
         <TouchableOpacity style={styles.addButton} onPress={handleSubmit} >
          <Text style={[styles.addButtonText]} >{ edit == null ? "Add" : "Update" }</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos.todos}
        renderItem={renderTodos}
        numColumns={1}
        style={styles.list}
      />
    </View>
  )
}

export default Todo
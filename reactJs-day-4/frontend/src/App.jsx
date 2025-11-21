import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoList from './componnts/TodoList';
import TodoInput from './componnts/TodoInput';
const App = () => {

  const [todos, setTodos] = useState([]);

  const createTodo = async () => {
    await axios.post('http://localhost:8001/todo/create');

  }

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:8001/todo/getAll');
    console.log(response.data.data)
    setTodos(response.data.data);
  }

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <TodoInput createTodo={createTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
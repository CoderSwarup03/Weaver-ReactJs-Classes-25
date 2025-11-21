import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoList from './componnts/TodoList';
import TodoInput from './componnts/TodoInput';
const App = () => {

  const [todos, setTodos] = useState([]);

  // const createTodo = async () => {
  //   await axios.post('http://localhost:8001/todo/create');

  // }
  const createTodo = async (title) => {
    try {
      await axios.post('http://localhost:8001/todo/create', { title });
      await fetchTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  }

  const deleteTodo = async (_id) => {
    await axios.delete(`http://localhost:8001/todo/delete/${_id}`);
    await fetchTodos();
  }

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:8001/todo/getAll');
    console.log(response.data.data)
    setTodos(response.data.data);
  }

  const updateTodo = async (_id,title) => {
    await axios.put(`http://localhost:8001/todo/update/${_id}`,{title});
    await fetchTodos();
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <div className='max-w-[85%] mx-auto'>
        <h1 className='text-2xl font-bold text-center text-green-500'>TodoApp2.0</h1>
        <TodoInput createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </>
  )
}

export default App
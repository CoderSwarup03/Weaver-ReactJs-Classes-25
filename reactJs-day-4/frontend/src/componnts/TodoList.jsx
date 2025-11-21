import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
    return (
        <>
            {todos.map((item) => {
                return (
                    <TodoItem key={item.id} todo={item}/>
                )
            })}
        </>
    )
}

export default TodoList
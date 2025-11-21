import React, { useState } from 'react'

const TodoInput = ({createTodo}) => {
    const [input, setInput] = useState('')

    const handleSubmit = () => {
        createTodo(input)
        setInput('')
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <input
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    className='border-2 border-green-500 outline-none'
                    type="text" />
                <button
                onClick={() => handleSubmit()}
                >Add</button>
            </div>
        </>
    )
}

export default TodoInput
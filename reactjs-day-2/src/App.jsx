import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('black')

  const dec = () => {
    if (count <= 1) {
      setColor('gray')
    } 
    if (count < 1) {
      setColor('red')
    }
    setCount(count - 1)
  }

  const reset = () => {
    setColor('gray')
    setCount(0)
  }

  const inc = () => {
    if (count === 0) {
      setColor('gray')
    }
    if (count >= 0) {
      setColor('blue')
    }
    setCount(count + 1)
  }

  return (
    <>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 p-4 w-[350px] rounded-md'>
        <h1 className='text-center text-2xl font-bold'>Counter App⏳</h1>
        <h2 className='text-5xl font-bold text-center' style={{ color: color }} >{count}</h2>
        <div className='flex justify-between gap-2 p-4 items-center'>
          <button
            onClick={dec}
            className='text-semibold text-lg font-bold bg-gray-100 cursor-pointer p-2 rounded-md border-2 border-green-500'>Decrement</button>
          <button
            onClick={reset}
            className='text-semibold text-lg font-bold bg-gray-100 cursor-pointer p-2 rounded-md border-2 border-green-500'>Reset</button>
          <button
            onClick={inc}
            className='text-semibold text-lg font-bold bg-gray-100 cursor-pointer p-2 rounded-md border-2 border-green-500'>Increment</button>
        </div>
      </div>
    </>
  )
}

export default App
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './features/couterSlice'

const App = () => {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App

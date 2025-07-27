import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import ToDoList from './ToDoList'

const HomePage = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')

  const inputRef = useRef()

  useEffect(() => {
    console.log('component mounted');
    return (() => { console.log('component unmounted') })
  }, [])

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ]

  const filteredData = useMemo(() => {
    return users.filter(item => item.name.toLowerCase() === search.toLowerCase())
  }, [search])

  const getDataByContolled = (e) => {
    setName(e.target.value)
    console.log(e.target.value)
  }

  const getDataByUnContolled = () => {
    console.log(inputRef.current.value)
  }

  const incrementCount = () => {
    setCount(count + 1)
  }

  const intialState = {count:0}

  const reducerFunc = (state, action) => { 
    switch(action.type) { 
      case 'increment':
        return {count: state.count + 1}
      case 'decrement':
        return {count: state.count - 1}
      case 'reset':
        return intialState
      default:
        state
    }
  }

  const btnIncrement = useCallback(() => { 
    setCount( prev => prev + 1 )
  }, [])

  const [state, dispatch] = useReducer(reducerFunc, intialState)

  return (
    <div>
      {/* controlled components */}
      <div>
        <input type='text' onChange={getDataByContolled} />
      </div>

      {/* uncontrolled components */}
      <div>
        <input type='text' ref={inputRef} />
        <button onClick={getDataByUnContolled}>Search</button>
      </div>

      {/* counter with usestate */}
      <div>
        <button onClick={incrementCount}>Increment</button>
        <p>Count is:{count} </p>
      </div>

      {/* filter user data using use memo */}
      <div>
        <input
          value={search}
          type='text'
          onChange={(e) => setSearch(e.target.value)} />
        <ul>
          {filteredData.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>

      {/* count using use reducer */}
      <div>
        <h2>Count : {state.count}</h2>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>

      <div>
         Memoised Counter: { count }
        <button onClick={btnIncrement}>Btn Counter</button>
      </div>

      <div>
        <ToDoList/>
      </div>
    </div>

  )
}

export default HomePage

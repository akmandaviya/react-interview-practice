import React, { useEffect, useRef, useState } from 'react'

const HomePage = () => {
  const [name, setName] = useState('')
  const [count, setCount]= useState(0)

  const inputRef = useRef()

  useEffect(() => { 
    console.log('component mounted');
    return (() => {console.log('component unmounted')})
  },[])

  const getDataByContolled = (e) => { 
    setName(e.target.value)
    console.log(e.target.value)
  }

  const getDataByUnContolled = () => { 
    console.log(inputRef.current.value)
  }

  const incrementCount = () => { 
    setCount(count+1)
  }

  return (
    <div>
        {/* controlled components */}
      <div>
        <input type='text' onChange={getDataByContolled}/>
      </div>

      {/* uncontrolled components */}
      <div>
        <input type='text' ref={inputRef}/>
        <button onClick={getDataByUnContolled}>Search</button>
      </div>
        {/* counter with usestate */}
      <div>
        <button onClick={incrementCount}>Increment</button>
        <p>Count is:{count} </p>
      </div>
    </div>
  )
}

export default HomePage

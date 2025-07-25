import React, { useRef, useState } from 'react'

const HomePage = () => {
  const [name, setName] = useState('')

  const inputRef = useRef()

  const getDataByContolled = (e) => { 
    setName(e.target.value)
    console.log(e.target.value)
  }

  const getDataByUnContolled = () => { 
    console.log(inputRef.current.value)
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
    </div>
  )
}

export default HomePage

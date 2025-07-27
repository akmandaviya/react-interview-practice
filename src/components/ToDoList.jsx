import React, { useState } from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingText, setEditingText] = useState('')


    const addToDo = () => { 
        if(!input.trim()) return
        setTodos([...todos, {id: Date.now(), text: input}])
        setInput('')
        setEditingId(null)
        setEditingText('')
    }

    const deleteTodo = (id) => { 
        setTodos(todos.filter(item => item.id !== id))
    }  
    
    const editTodo = (item) => { 
        setEditingId(item.id)
        setEditingText(item.text)
    }

    const saveTodo = (id) => { 
        if(!editingText.trim()) return
        setTodos(todos.map(item => item.id === id ? {item, text: editingText} : item))
        setEditingId(null)
        setEditingText('')
    }

    const cancelEdit = () => { 
        setEditingId(null)
        setEditingText('')
    }   

    return (
        <div className="todo-container">
            <h2>
                To Do List
            </h2>
            <input 
                type="text" 
                value={input}
                onChange={(e) => { 
                    setInput(e.target.value)
                }}/>

            {/* only add and delete */}

            {/* <ul>
                {todos.map( item => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={() => deleteTodo(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul> */}

            {/* CRUD operation  */}

            <ul>
                { todos.map( item => (
                    <li key={item.id}>
                        { editingId === item.id ? (
                            <>
                            <input 
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}/>
                            <button onClick={() => saveTodo(item.id)}>Save</button>
                            <button onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : (
                            <>
                            {item.text}
                            <button onClick={editTodo(item)}>Edit</button>
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                            </>
                        )}

                    </li>
                ))}
            </ul>
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export  default ToDoList
import React, { useState } from 'react'
import axios from 'axios';
import './Tasks.css'

const Tasks = () => {
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

  const [todo, setTodo]=useState({
    task:"",
    priority:"",
    category:"",
    status:"",
    this_date: date
  });

  const handleChange=(e) => {
    setTodo((prev)=> ({...prev, [e.target.name]:e.target.value}))
  }; 
  // console.log(todo)
  
  const handleClick= async(e) => {
    e.preventDefault()
    if(todo.task==="" || todo.priority==="" || todo.category==="") {
      alert("Enter necessary fields")
    }
    else {
      try {
        await axios.post("http://localhost:8800/todos", todo)
        console.log("TODO Added")
        window.location.reload()
      }
      catch(err) {
        console.log(err)
      }
    }
  }; 
  
  const handleCancel= () => {
    window.location.reload()    
  }; 

  return (
    <div className='tasks-bg'>

        <h1 className="create-task-heading">
            Create <span className="create-task-heading-subpart">Task</span>
        </h1>

        <form className='input-section d-flex flex-row align-items-center'>

          <input type="text" name="task" className="todo-user-input" onChange={handleChange}
          placeholder="E.g. Get the assignment done" autoComplete='off'
          />

          <select className="category-user-input" aria-label="category" name="category" onChange={handleChange}>
            <option selected disabled hidden>Add Category</option>
            <option value="Personal">Personal</option>
            <option value="Proffessional">Proffessional</option>
          </select>

          <select className="priority-user-input" aria-label="priority" name="priority" onChange={handleChange}>
            <option selected disabled hidden>Add Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

        </form>

        <div className='d-flex justify-content-end w-75 mt-2'>
          <button type='button' className="cancelButton" onClick={handleCancel}>Cancel</button>
          <button type='button' className="addButton" onClick={handleClick}>Add</button>
        </div>

    </div>
  )
}

export default Tasks
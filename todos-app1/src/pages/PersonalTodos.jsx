import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BsTrash3Fill} from 'react-icons/bs'
// import {FiEdit} from 'react-icons/fi'
import './pages.css'

const PersonalTodos=() => {
  const [pendingtodos, setPendingTodos]=useState([])
  const [completedtodos, setCompletedTodos]=useState([])
  
  useEffect(()=> {
    const fetctAllTodos= async() => {
        try {
            const res1=await axios.get("http://localhost:8800/personalpendingtodos")
            setPendingTodos(res1.data)

            const res2=await axios.get("http://localhost:8800/personalcompletedtodos")
            setCompletedTodos(res2.data)

        }
        catch(err) {
            console.log(err)
        }
    }
    fetctAllTodos();
  }, [])


  const handleDelete=async(id)=> {
    try {
        await axios.delete("http://localhost:8800/todos/"+id)
        window.location.reload()
    }
    catch(err) {
        console.log(err)
    }
  }
  
  const handlePendingStatus=async(todo)=> {
    try {
        await axios.put("http://localhost:8800/updatependingtodos/"+todo.id)
        const res1=await axios.get("http://localhost:8800/personalpendingtodos")
        setPendingTodos(res1.data)
        const res2=await axios.get("http://localhost:8800/personalcompletedtodos")
        setCompletedTodos(res2.data)
        // window.location.reload()
    }
    catch(err) {
        console.log(err)
    }
  }
  
  const handleCompletedStatus=async(todo)=> {
    try {
        await axios.put("http://localhost:8800/updatecompletedtodos/"+todo.id)
        const res1=await axios.get("http://localhost:8800/personalpendingtodos")
        setPendingTodos(res1.data)
        const res2=await axios.get("http://localhost:8800/personalcompletedtodos")
        setCompletedTodos(res2.data)
        // window.location.reload()
    }
    catch(err) {
        console.log(err)
    }
  }


  return (
    <div  className="todos">
        <div className='pending-todos'>
            <h1 className='sub-heading'>Todos</h1>
            <div>
                {pendingtodos.map(todo=> ( 
                    <div className="todo container" key={todo.id}>
                        <div className='d-flex align-items-center'>
                            <div>
                                <input className="status-box" type="checkbox" defaultChecked={false} onClick={()=>handlePendingStatus(todo)}/>
                            </div>
                            <div className='each-todo'>
                                <input type="text" className="task-name" value={todo.task} />
                                <h3 className='category'>{todo.category}</h3>
                                <h3 className='priority'>{todo.priority}</h3>
                            </div>
                            <div>
                                {/* <span>
                                    <FiEdit/>
                                </span> */}
                                <span>
                                    <BsTrash3Fill className='delete-icon' onClick={()=>handleDelete(todo.id)}/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        <hr className='w-75'/>
        <div className='completed-todos'>                      
            <h1 className='sub-heading'>Completed</h1>
            <div>
                {completedtodos.map(todo=> ( 
                    <div className="todo container" key={todo.id}>
                        <div className='d-flex align-items-center'>
                            <div>
                                <input className="status-box" type="checkbox" defaultChecked={true} onClick={()=>handleCompletedStatus(todo)}/>
                            </div>
                            <div className='each-todo'>
                                <input type="text" className="task-name" value={todo.task} />
                                <h3 className='category'>{todo.category}</h3>
                                <h3 className='priority'>{todo.priority}</h3>
                            </div>
                            <div>
                                {/* <span>
                                    <FiEdit/>
                                </span> */}
                                <span>
                                    <BsTrash3Fill className='delete-icon' onClick={()=>handleDelete(todo.id)}/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    </div>

  )
}

export default PersonalTodos
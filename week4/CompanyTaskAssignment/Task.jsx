import React, { useState } from 'react'

export default function Tasks() {
    const [task,setTask] = useState();

  return (
    <>
    
    <div>Tasks</div>
    <form>
        <label>Task</label>
        <input 
        className='border-2 '
        required
        value={task}
        onChange={(e)=>{
            setTask(e.target.value)
        }}
        type="text"
        
        />
        <button
        className='bg-gray-400 rounded-md m-5 p-2'
        onSubmit={(e)=> e.preventDefault()}>
            Submit
        </button>
    </form>
  
    </>
  )
}

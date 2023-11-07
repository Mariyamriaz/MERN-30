import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [todos,setTodo]=useState([]);
 const [task,setTask]=useState("");
 const [status,setStatus]=useState("completed");


  return (
    <>
      <div className='app' >
     <form onSubmit={(e)=>
    {
     e.preventDefault();
     setTodo([...todos,
    {  
     task:task,
     status:status
    }
    ]);

    }}>
      <label>Task</label>
      <input  
      required
      type="text"
      value={task}
      onChange={function(e){
      setTask(e.target.value);
      }} />
      <select 
      required
      value={status}
      onChange={function(e){
      setStatus(e.target.value);
      }}>
        
        <option value="completed">completed</option>
        <option value="incomplete">incomplete</option>
        <option value="Pending">Pending</option>
      </select>
      <button type='submit'>submit</button>
    </form>
    <div>
      {todos.map((item)=>
      {
        return(
          <div key={item}>
            <span>{item.task}  </span>
            <span>{item.status}  </span>
          </div>
        );
      })}
    </div>
    </div>
    </>
  )
}

export default App

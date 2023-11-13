import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Swal from 'sweetalert2'


function App() {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [url,setUrl] = useState("");
  function submit(e){
   
    e.preventDefault();
    Swal.fire({
    title: "Submitted",
    html:` ${name} ${email} ${url}`,
    icon: "success"})
  }
  return (
    <>
      <form onSubmit={submit}>
        <h1 className='text-2xl font-bold m-5 p-2 shadow-lg'>Contact Form</h1>
        <div className='flex flex-col '>
          
        <input className='w-60 p-2 m m-5 border-black border-2 rounded-md shadow-lg'  type="text" placeholder='John' required
        onChange={(e)=>{setName(e.target.value)}}/>
        <input className='w-60 p-2 m m-5 border-black border-2 rounded-md shadow-lg' type="url" placeholder='www.example.com' required
        onChange={(e)=>{setUrl(e.target.value)}}/>
        <input className='w-60 p-2 m m-5 border-black border-2 rounded-md shadow-lg' type="email" placeholder='mail@example.com' required
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <textarea className='w-96  p-10 m m-5 border-black border-2 rounded-md shadow-lg' cols="30" rows="5" placeholder='Write something to us' required
        onChange={(e)=>{setMessage(e.target.value)}}></textarea>
        <button type='submit' className='w-20 p-2 m-5 bg-slate-600 text-white border-black border-2 rounded-md shadow-lg hover:scale-110'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   function Name(){
    alert("Maryam Riaz");
   }
  

  return (
    <>
      <div className='app'>
      <h1>Hi, I'm ________.</h1>
      <h4>Tap on the button to know the name..</h4>
      <button onClick={Name}>press me</button>
      </div>
    </>
  )
}

export default App

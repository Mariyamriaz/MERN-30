import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function onClick()
{
  return(alert= "hi");
}
function home() {
  

  return (
    <>
       <div className='wrap'><div className='circle'></div></div>
      <div className='wrap'>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
      <div className='circle1'></div>
      </div>
      <button onClick={alert}>click me</button>
    </>
  )
}

export default home

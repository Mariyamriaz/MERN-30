import { useState } from "react"

function Security() {
  const [show,setShow]=useState("")

    return (
      <>
        <div>
            <input className="border-4"/> 
            <input className="border-4"/>
            <button>show</button>
        </div>
      </>
    )
  }
  
  export default Security
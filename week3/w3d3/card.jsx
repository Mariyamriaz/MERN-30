import React from "react"



function Card()
{
    return(<React.Fragment>

    <div className="mx-48 my-20 flex">
        <img src="https://api.dicebear.com/7.x/micah/svg"
        className="h-100 w-80"/>
        <div className=" mx-48 my-20 flex justify-between">
        <span className="font-bold"> Classic Utility Jacket </span>
        <span className="font-bold text-gray-400" > $1100 </span>
        </div>
    </div>
           </React.Fragment>
  )
}
export default Card
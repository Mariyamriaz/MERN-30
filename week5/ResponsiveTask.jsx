import React from "react";

function Responsive(){
    return(
        <>
        <div>

        <div className="lg:flex flex-row">
            <div className=" h-40 lg:w-1/2 w-full bg-blue-600 m-2"></div>
            <div className=" h-40 lg:w-1/2 w-full bg-blue-600 m-2"></div>
        </div>
        <div className=" h-40 w-full bg-yellow-600 m-2"></div>
        <div className="lg:flex flex-row">
            <div className=" h-40 lg:w-1/3 w-full bg-green-600 m-2"></div>
            <div className=" h-40 lg:w-1/3 w-full bg-green-600 m-2"></div>
            <div className=" h-40 lg:w-1/3 w-full bg-green-600 m-2"></div>
            
        </div>
        <div className="lg:flex md:flex-wrap sm:flex-row">
            <div className=" h-40  lg:w-1/4 md:w-2/4 sm:w-full bg-red-600"></div>
            <div className=" h-40  lg:w-1/4 md:w-2/4 sm:w-full bg-red-600 "></div>
            <div className=" h-40  lg:w-1/4 md:w-2/4 sm:w-full bg-red-600 "></div>
            <div className=" h-40  lg:w-1/4 md:w-2/4 sm:w-full bg-red-600 "></div>
            
        </div>

        </div>
        
        </>
    )
}
export default Responsive


function Calculator() {
  

    return (
      <>
        <form action="">
            <div className="flex flex-col">
            <label>a</label> 
            <input 
            className="border-2 border-black rounded-md p-5"
            type="number"/>
            <label>b</label> 
            <input 
            className="border-2 border-black rounded-md p-5"
            type="number" />
            </div>
            <div className="flex m-5">
              <button className="p-5 bg-teal-400  rounded-md ">+</button>
              <button>-</button>
              <button>*</button>
              <button>%</button>
              <button>/</button>
            </div>
        </form>
      </>
    )
  }
  
  export default Calculator
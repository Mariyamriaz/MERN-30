function App() {
    const [friends,setFriends]=useState(["Alice","Emily","jennifer"]);
    const [name,setName]=useState("");
   
  
    return (
      <>
        <div className='container'>
          
          <form onSubmit={function(e)
          {
            e.preventDefault();
            setFriends([...friends,name]);
          }}>
            <input type="text" 
            value={name} 
            onChange={function (e)
            {
              setName(e.target.value);
            }}/>
            <input type="submit" />
          </form>
          <div>friends list</div>
          {friends.map(function(item){
            return <div>
              {item}
            </div>
  
          })}
          
        </div>
        
  
      </>
    )
  }
  
  export default App
  
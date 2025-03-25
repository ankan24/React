
function App() {
  function fun(){
    alert("button clicked")
  }
  function fun1(){
    alert("Mouse hovered in Ankan")
  }
  function fun2(e){
    console.log(e.target.value);
  }
  function fun3(e){
    e.preventDefault();
    alert('form submit karu kya')
  }


  return (
    <div>
       <button onClick={alert("it automatically called (Immediate invocation - use arrow function)")}>Click me again</button>

      <form action="" onSubmit={fun3}>
        <input type="text" onChange={(e)=>{fun2(e)}}/>
        <button>Submit</button>
      </form>

      <p style={{color:"red" , border:"1px"}} onMouseOver={fun1}>Ankan</p>

      <button onClick={fun}>click me</button>
      <button onClick={()=>{alert("it's button 2")}}>click me2</button>
    </div>
  )
}

export default App
import { useState } from "react"
import "./Counter.css"
function Counter() {
    const [count , setCount] = useState(0);
  return (

    <div>
        <h1>You have clicked {count} times</h1>
        <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
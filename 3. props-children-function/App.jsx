import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
function App() {
     const [count , setCount] = useState(0);
     function handleClick(){
      setCount(count+1);
     }
  return (
    <>
    <Button fun={handleClick} text="click me"> 
          <h1>{count}</h1>
    </Button>
      <Card name="Ankan">
        {/*   //! all this content called children */}
        <h1>Hello World</h1>
        <p>Lorem ipsum dolor sit</p>
        <button>Click</button>
      </Card>

      <Card>
        <h1>Another Card</h1>
        <p>Lorem ipsum dolor sit</p>
      </Card>
      <Card children="Main ek children hu"></Card>
    </>
  )
}

export default App
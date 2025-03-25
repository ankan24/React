import { useState } from "react";
import { useEffect } from "react"


function App() {
  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(1);
  //!  first -> side-effect function
  //! second -> clean-up function
  //! third -> comma separated dependencies list
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])


  //? variation 1
  //! runs on every render
  // useEffect(()=>{
  //   alert("I will run in each render");
  // })
  
  //? variation 2
  //! runs only first render
  // useState(()=>{
  //   alert("I will run on only 1st render");
  // },[])

  //? variation 3
  //! run only particular change
  // useEffect(()=>{
  //   alert("I will run every time when count is updated");
  // },[count])

  //? variation 4
  //! multiple dependencies
  // useEffect(()=>{
  //   alert("I will run every time where count/total is updated")
  // },[count,total])

  //? variation 5
  //! add cleanup function 
  useEffect(()=>{
    alert("Count is updated")
    return ()=>{
    alert("Count is unmounted from UI")
    }
  },[count])


  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>count me</button><br />
      <p>{total}</p>
      <button onClick={()=>setTotal(total+1)}>total it</button>
    </div>
  )
}

export default App
import { useState } from "react";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";
function App() {
  
    const [isLogedIn, setLoggedIn] = useState(true);


    return(
      <> 
        {isLogedIn ? <LogoutBtn/> : <LoginBtn/>}
        <button onClick={()=>{setLoggedIn(!isLogedIn)}}>click me</button>
        
      </>
    )

    //!  if - else 
    // if(isLogedIn){
    //    return <LogoutBtn/>
    // }else{
    //    return <LoginBtn/>
    // }

    //! ternary operator 
    // return(
    //   <div>
    //     {isLogedIn ? <LogoutBtn/> : <LoginBtn/>}
    //   </div>
    // )
   
    //! logical operator
    // return (
    //   <div>
    //     <h1>Hello world</h1>
    //     {isLogedIn && <LogoutBtn/>}
    //     {!isLogedIn && <LoginBtn/>}
    //   </div>
    // )

    //! early return 
    // if(isLogedIn){
    //   return <LogoutBtn/>
    // }
  

}

export default App
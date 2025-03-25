//! if we want to send data from parent to child of child then why use use middle one child to pass data
//! we can use context api to pass data from parent to direct child of child

import "./App.css"
import { createContext, useState } from "react"
import ChildA from "./components/ChildA"

//? useContext-
// 1. create context.  2. Provide context.  3. Consume context. 
// parent - context provider ,any of child - context consumer


//! step1: create context
// const UserContext = createContext();
//! step2: wrap all the child inside a provider
//? UserContext.Provider
//! step3: pass the value to the provider
//? value={user}
//! step4: consume the context in Child


const ThemeContext =createContext();


function App() {
  //  const [user,setUser] = useState({name:"Ankan"});
   const [ theme,setTheme] = useState("dark");
  return (
    <>
    {/* <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider> */}



    <ThemeContext.Provider value={{theme,setTheme}}>
     <div id="container" style={{backgroundColor:theme === "dark" ? "#222" : "#ddd",color:theme === "dark" ? "#ddd" : "#222"}}>
     <ChildA/>
     </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
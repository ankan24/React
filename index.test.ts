//TODO: React Ts --------------------------------------------------------------------------------------------------------------------


//todo : Lecture 1  
//! Tools to crete react app -
// 1. Create React App (CRA) - A command line tool to create a new React app with a single command. It sets up the project structure, configures Webpack, Babel, and other tools for you. CRA is great for beginners and small projects.
//*  npx create-react-app my-app --template typescript 
// 2. Vite - A modern build tool that is faster than CRA. It uses native ES modules and has a simpler configuration. Vite is great for larger projects and offers better performance.
//*  npm create vite@latest my-app 
//* cd my-app
//* npm install
//* npm run dev

//! File and Folder Structure -
//? 1. public - Contains static files like index.html, favicon.ico, etc. This is where the app is mounted.
//? 2. src - Contains the source code of the app. This is where you will write your React components, styles, and other code.
//? 3. package.json - Contains the dependencies and scripts for the app. This is where you can add new libraries and tools to your project.
//? 4. tsconfig.json - Contains the TypeScript configuration for the app. This is where you can configure TypeScript options like strict mode, module resolution, etc.


// index.html -> main.tsx -> App.tsx -> <Components/>

//todo : Lecture 2
//! React Components -
//? 1. Functional Components - A function that returns a React element. It can accept props as an argument and can use hooks to manage state and lifecycle methods. Functional components are the preferred way to create components in React.
//? 2. Class Components - A class that extends React.Component and has a render method that returns a React element. Class components can have state and lifecycle methods, but they are less common in modern React development.


//* <>  </>  react fragment


//todo: Lecture 3
//! Tailwind Css
//*1. npm install tailwindcss @tailwindcss/vite

//*2. import { defineConfig } from 'vite'
//* import tailwindcss from '@tailwindcss/vite'
//* export default defineConfig({
//*   plugins: [
//*     tailwindcss(),
//*   ],
//* })

//*3. @import "tailwindcss";


//todo: Lecture 4
//! Import Export 
//  mainly we create one component for one file 
//  if we need to crate multiple components in one file then we need to export them
//  we can user export default only in one component
//  first letter of the name of the components should be in Capital letter
//  we use pascal letter for naming (ex- ToDoApp.tsx)
//  we can export default component as small letter naming , but when we import it , we need to use capital letter
//  export default app;           ,  export {Test}
//  import App from './App.tsx';  ,  import {Test} from './App.tsx';


//todo: Lecture 5
//! Functional Components Types
//* variables - const, let, var
//  let name = 'Ankan'
//  <h1>Welcome {name} </h1>
//* array 
//  let names:string[] = ['Ankan', 'Ag', 'A']
//  <h1>Welcome {names} </h1> -> all arr data will print
//  {
//     names.map((name, index) => (
//        return <h1 key={index}>Welcome {name} </h1>
//     ))
//  }


//todo: Lecture 6
//! Functional Components 1
// We create a functional component , and import it , then use in App.tsx 
//* props - we can pass values from parent to child
//? App.tsx -   <Greet name="Ankan" />
//? Greet.tsx -
//  function Greet(props:{name:string}){
//     return (
//       <div>Greet {props.name}</div>
//     )}
//   export default Greet
//* in functional component we can gave any names of the props , but in class component we can not use other name , we must use props

//todo: Lecture 7
//! Functional Components 2
// we can send multiple props
// for passing a number , array we use {} . ex-  <Greet name="Ankan" age={22}/>

//todo: Lecture 8
//! Functional Components 3
// import data from "./data.json" - import json data
// access object props -   <p>{props.code?.name } ----- {props.code?.age}</p>
//* // for container value we use children field
// type GreetType={
//     name : string,
//     age? : number,
//     code? : {name:string , age: number},
//     children : string //* for contain container value
// }
//?  App.tsx
//  <Greet name="Ankan" age={22} code={data[0]}>
//         Demo Text
//   </Greet>


//todo: Lecture 9
//! Event Handling - Function Handling
// From handel in Component
// for button we use onClick=(function reference)
// we can not create functions in child for buttons. cause Each different button click it will called same function.
//  thats why we will create different functions in parent (App) and send them into button props.
//? App.tsx -
// const sendHandel = ()=>{
//     alert("Send Button Clicked");
//   }
//   const clickHandel = ()=>{
//     alert("It is Click Button")
//   }
    // <Button value="Send" click={sendHandel} />
    // <Button value="Click" click={clickHandel} />
//? Button.tsx -
// type ButtonProps = {
//     value : string,
//     click : ()=>void
// }
{/* <button onClick={props.click}>{props.value}</button> */}
{/* <button onClick={(e:React.MouseEvent)=>alert('test button')}>Test</button> */} // we can send multiple arguments using (e , 1)=> 


//todo: Lecture 10
//! Event Handling - UI
//  print value of text box after click on button
//? Controller.tsx
// function Controls() {
//     let textData = "";
//     const changeHandle = (e: ChangeEvent) => {
//         let target = e.target as HTMLInputElement;
//         textData = target.value;
//         console.log(textData);
//     }

//     const clickHandle = ()=>{
//         alert(textData);
//     }

//     return (
//         <>
//             <input type="text" onChange={changeHandle} />
//             <button onClick={clickHandle}>Print</button>
//         </>
//     )
// }

//todo: Lecture 11
//! Class Component
//  Class component must inherit form React.Component
//  Class does not return 
//  we use render() method for return
//? Greeting.tsx
// import React  from "react";
// class Greeting extends React.Component
// {
//     render()
//     {
//         return (
//             <>
//                 Class Component
//             </>
//         )
//     }
// }
// export default Greeting;

//todo: Lecture 12
//! Class Component - Props & Event
//  Class Component contains a predefine variable name props
//  React.Component<props type , state type>
//  React Component constructor create the props , we just need to define props type
//  {this.props.name} we called props variable in same class so we use this key word
//  <button onClick={this.clickHandler}>ok</button>
//? Greeting.tsx
// import React  from "react";
// type GreetingProps = {
//     name : string
// }
// class Greeting extends React.Component<GreetingProps>
// {    
//     clickHandler = ()=>{
//         alert("It is Ok")
//     }
//     render()
//     {
//         return (
//             <>
//                 Class {this.props.name}
//                 <button onClick={this.clickHandler}>ok</button>
//             </>
//         )
//     }
// }
// export default Greeting;


//todo: Lecture 13
//! State Management in Functional Component
// State management means , if we change any variables value then it update the variable value in every where.
// when data will be updated then we need to re render ui
// in functional component we cannot directly manage state , we use Hooks for manage state.
// Hook is basically a function
//*    const  state = useState();
//*    console.log(state);  
// useState return an array - [value , function]
//   const [data , setData] = useState()
//? Login.tsx
//  const [data , setData] = useState("hi")
//     const clickHandel = ()=>{
//         setData("Bye")
//         console.log(data);
//     }
{/* <button onClick={clickHandel}>Change</button> */}
//  setState is a async process
// It checks the virtual dom and only update the changes portion , thats called //*(Diffing)


//todo: Lecture 14
//! State Management Login
// one useState is user for one variable
//  if we want to store custom value then we need to assign custom type for useState
//? Login.tsx
// type UserType = {
//     name : string,
//     email : string
// }
// const [user , setUser] = useState<UserType | null>(null)   or  const [user , setUser] = useState<UserType>({} as UserType) 
// return {user?.name} {user?.email}


//todo: Lecture 15
//! UseEffect - Timer (Functional Component)
//* we must define a arrow function before, after calling it.
//? Timer.tsx -
// No state management - log update value but not update in UI
// function Timer() {
//     let count = 1;
//     setInterval(timerTick,1000);
//     function timerTick(){
//         count++;
//         console.log(count);
//     }
// }
//? Timer.tsx
// using state management - ( //* but in every call it recall setInterval exponential times thats why log is - 1,2,4,8,12,18..)
// function Timer() {
//     const [count,setCount] = useState(0);
//     const timerTick = ()=>{
//         setCount(count+1);    
//     }
//     let id = setInterval(timerTick,1000);
//     console.log(id);
// }
//* thats why we use useEffect hooks -
// use effect call the interval function now
//* useEffect called for each render 
//    useEffect (()=>{
//      for each render
//         setInterval(timerTick,1000);
//     },[]) // dependency - list of variable
//* },[count]) -> we can set condition for which useEffect should called
// for [] -> it will called only one times
//  useEffect can return a function that can clear the previous interval
//? Timer.tsx
// function Timer() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         let id = setInterval(timerTick, 1000);
//         console.log(id);
//         return () => clearInterval(id);
//     }, [count])

//     function timerTick(){
//         setCount(count + 1);
//     }
// }


// todo: Lecture 16
//! Class Component - Timer
// we need to create a constructor that automatically called function , cause we can not call a function in a class
// Base class is Component Class -> we derive constructor from here , so we use super() method

//*  In JS - regular function automatically create a this object
// this -- created by regular function -- store reference to the caller 
//* arrow function does not create this object
// thats why we use arrow function for Class Component . In this arrow function .this called parent automatically 

//* we use componentDidMount() --- don't use Constructor  -- it is a life cycle event for Class Component
// componentDidMount() - it invoke when component mount on screen
//? CTimer.tsx -
// type SProps = {}
// type SState = {
//     count : number;
// }   
// class CTimer extends React.Component<SProps,SState> {
//     state = {count  : 1};
//     // constructor(props:SProps){
//     //     super(props)
//     //     setInterval(this.timerTick,1000);
//     // }
//     componentDidMount(): void {
//         setInterval(this.timerTick,1000)
//     }
//     timerTick=()=>{
//         this.setState({count:this.state.count+1})
//         console.log("hii");
//     }
//     render(){
//         return(
//             <>
//             {this.state.count}
//             </>
//         )
//     }
// }


//todo: Lecture 17
//! React TailwindCss
//  if we need to over write tailwindcss then we need to use - @layers utilities
//? index.css
// @layers utilities{
//     .container{
//         @apply pl-12 pr-12 mx-auto;
//     }
// }
//! Ctrl + Shift + p   --->   Change Language Mode  ---> tailwindCss


//todo: Lecture 18
//! Two Way Binding
//  for textbox we use onChange event
//  and the event type is React.ChangeEvent
//  for update text box we use - value property , and use state variable for update it
//* One Way Binding
//? Text.tsx -
// function Text() {
//     let textData = "";
//     const changeHandler = (e: React.ChangeEvent) => {
//         let target = e.target as HTMLInputElement;
//         textData = target.value;
//     }

//     const printHandler = () => {
//         alert(textData);
//     }

//     return (
//         <>
//             <input type="text" onChange={changeHandler} />
//             <button onClick={printHandler}>Print</button>
//             <button>Change</button>
//         </>
//     )
// }
//* Two  way Binding
// variable data goes to text box  --- text box data goes to variable
//? Text.tsx
// function Text() {
//     // let textData = "";
//     const [textData,setText] = useState("");
//     const changeHandler = (e: React.ChangeEvent) => {
//         let target = e.target as HTMLInputElement;
//         // textData = target.value;
//         setText(target.value)
//     }

//     const printHandler = () => {
//         alert(textData);
//     }

//     const updateHandler = ()=>{
//         setText("Hii")
//     }

//     return (
//         <>
//             <input type="text" onChange={changeHandler} value={textData} />
//             <button onClick={printHandler}>Print</button>
//             <button onClick={updateHandler}>Change</button>
//         </>
//     )
// }

//todo: Lecture 19
//! Parent Child Exchange Data
// Parent can send data to the Child using props.
// but if we want to parent receive the data and forward it to child , then child can make change
// all data we send in props are read only
// we can not change props value in Child Components
//*  so for change we use state variable in parent and send both data,setData function reference on props 
//? Parent.tsx -
// function Parent() {
//     // let data = "Code"
//     const [ data , setData] = useState("Hi")
//   return (
//      <>
//      Parent Data {data}
//      <Child name={data} fun={setData}/>
//      </>
//   )
// }
//? Child.tsx -
// type ChildProps = {
//     name : string,
//     fun : (args:string)=>void
//  }
//  function Child(props:ChildProps) {
//      const changeHandler = ()=>{
//          props.fun("bye")
//      }
//    return (
//       <>
//       <div>Child component {props.name}</div>
//       <button onClick={changeHandler}>change</button>
//       </>
//    )
//  }


//todo: Lecture 20
//! React Routing 
//* npm i react-router-dom @types/react-router-dom     ------ for TypeScript
//? main.tsx -
{/* <BrowserRouter>
    <App />
</BrowserRouter> */}
//  wrap App with browser router
//  now we need to define different different routes in App.tsx
//? App.tsx
// function App() {
//   return (
//     <>
//     <div>App component</div>
//     <Routes>
//       <Route path='/' element={"Home"}/>
//       <Route path='/login' element={<Login/>}/>
//     </Routes>
//     </>
//   )
// }
//? Navbar.jsx 
{/* <ul>
<li><a href="/login">Login</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
</ul> */}
//* we don't use anchor tag for linking , cause it all time reload the page .
// we use link tag
//  <>
//     <ul>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//     </ul>
// </>
//* Link tag does not reload pages
//* NavLink - in NavLink there are 2 additional attributes - class="active" , aria-current="page". -> it only shows in which links we work on
//  we can use extra features using .active class
//    <>
//     <ul>
//         <li><NavLink to="/login">Login</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/contact">Contact</NavLink></li>
//     </ul>
//     </>
//* for Button redirection ---
//* useNavigate - this hooks is use to navigate into other page
//? Navbar.tsx
//   const navigate = useNavigate();
// <button onClick={()=>{navigate('/login')}}>Login</button>
// by using useNavigate hook we create a reference . that use for navigate "/login" by clicking a button
//* if we want to pass data while navigation then we use 2 parameter that is - state object - it is browser states that store in cache 
{/* <button onClick={()=>{navigate('/about', {state:{data : 10}})}}>About</button> */}
//* useLocation - to receive navigate state
//? About.tsx
// function About() {
//   const location = useLocation(); //* location and state is an object
//   return (
//     <>
//         <div>About</div>
        // {location.state?.data}  //* we use ? if state not exist , if we want to directly hit on /about end point 
//     </>
//   )
// }

//! Dynamic routing
// /contact/:city
//? Navbar.tsx
//  <li><NavLink to="/contact/:city">Contact</NavLink></li>
//* useParams - to receive parameter data
//? Contact.tsx
// function Contact() {
//   const params = useParams() ;  // object -> city
//   return (
//   <>
//   <div>Contact</div>
//   {params.city}
//   </>
//   )
// }
//! Nested routes 
//? App.tsx
//  <Routes>
    //   <Route path='/product' element={<Master/>}>   //* parent   // it overwrite master component , don't show child elements so we use <Outlet/> in master layout
//           <Route path='cloth' element={<div>Cloths</div>}></Route>  //* child
//           <Route path='elect' element={<div>Electronics</div>}></Route> //*child
//       </Route>
// </Routes>
//? MasterOutlet.tsx
// function Master() {
//   return (
//     <>
//       <div>Master</div>
//       <div>
        // <Outlet/> //* it's use to render child also
//       </div>
//     </>
//   )
// }


// todo: Lecture 21
// ! Routing using CreateBrowserRouter
//  now we use Browser Router method . we don't need to wrap <App/> using <BrowserRouter>
// we apply BrowserRouter directly in App.tsx
//? App.tsx
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// const router = createBrowserRouter([    //* we use createBrowserRouter that contains array of object [{},{}..] each object contains different different router . we store it in a variable
//   { 
//       path:"/",
//       element: <Home/>
//   },{
//     path:"/about",
//     element:<About/>
//   }
// ])

// function App() {
//   return (
//      <>
//      <div>App Component</div>
    //  <RouterProvider router={router} />  //* using RouterProvider we add all routes on App.tsx
//      </>
//   )
// }


//* loader - 
//? App.tsx -
// const router = createBrowserRouter([
//   { 
//       path:"/",
//       element: <Home/>
//   },{
//     path:"/jobs",
//     element:<Jobs/>,
//     loader:fetchJobs     //* loader is a function reference . when we hit /jobs it call the function fast then return a value , the render the component.
//   }
// ])

//* jobs.json  - we need to put this static file on public folder for direct access using fetch
//? Jobs.tsx-
// import { useLoaderData } from "react-router-dom";
// import jobsData from "../jobs.json" ; //* In react we can direct access local json data , don't need to use any fetch
// type JobsType = {
//     id : number,
//     title:string,
//     description:string,
//     package:string
// }

// function Jobs() {
//   const data = useLoaderData()   //* it store the loader function return value
// const data = useLoaderData<JobsType[]>()  
// return (
//      <>
//      {/* {data} */} 
//      Jobs
//       {
//         data.map((item)=>{
//             return(
//                 <div>{item.id}  + {item.title}</div>
//             )
//         })
//       }
//      </>
//   )
// }
// export const fetchJobs = async()=>{
//     // return "Hello";
//    const response = await fetch("/jobs.json")   //* jobs.json must be on public folder cause it is static file .  Fetch statement return a promise that handle using then catch
//* we don't use then , catch here cause if we create it as a Async function it takes time , but then fetchJobs function return undefine . so we directly use fetch("/xyz") and use await for waiting
//     const output = await response.json();
//     return output
// } 
// export default Jobs

//* now access job all details using just job id 
//? App.tsx-
// {
//     path:"/jobdetails/:id",
//     element:<Jobs/>,
//     loader:fetchJobsDetails
//   }

//? Job.tsx - 
// this page show all jobs
//  {
//         data.map((item)=>{
//             return(
//                 <div>
//                  <NavLink to={`/jobdetails/${item.id}`}>{item.title}</NavLink>   //* we use dynamic routing for send particular job details according to job title // for loader we don't use state for receive details we need to use dynamic routing
//                 <div>{item.description}</div>
//                 </div>
//             )
//         })
//       }

//? JobDetails.tsx -
// this page for particular job that i click

// import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
// function JobDetails() {
//     const data = useLoaderData<JobsType>();
//   return (
//      <>
//        <div>{data.title}</div>
//        <div>{data.description}</div>
//      </>
//   )
// }
// export default JobDetails

// export const fetchJobsDetails = async({params}:LoaderFunctionArgs)=>{  //* in LoaderFunctionArgs a variable available name - params , that store parameters
//     const id = Number(params.id)   //* convert params string id into number . that help to compare
//    const response = await fetch("/jobs.json")
//     const output = await response.json();
//     const filterOutput = output.filter((item)=>{
//         if(item.id = id){   //* check id of params and id of json file are same or not
//             return true;
//         }
//     })
//     return filterOutput
// } 


//todo: Lecture 22
//! Fetch
// if we use direct fetch() the it call every time while page reload. so we uae useEffect for using fetch()
//  <StrictMode> - it is debugging mode . it call UseEffect 2 times . one for mounting and another for unmounting
//? Posts.tsx -
// import { useEffect, useState } from "react"
// interface PostType {   //* we can reuse this type in other component 
//     id : number,
//     title : string,
//     body : string
//  }

// function Posts() {
//     // let data:PostType[] = [];      // we must use state variable to update state
//     const [data , setData] = useState<PostType[] | undefined>();
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts")   //* fetch the api
//         .then((response)=>{  // * it is a structure data include header body 
//             return response.json(); //* we extract just body here. it create promise
//         }).then((ele)=>{  //* actual data in json formate
//              console.log(ele);
//             //  data = ele;
//             setData(ele)
//         })
//     },[])

//   return (
//      <>
//       {
//         data?.map((item)=>{
//             return(
//                 <h1>{item.title} + {item.body}</h1>
//             )
//         })
//       }
//      </>
//   )
// }
// export default Posts

//* for loading screen  and error screen
// import { useEffect, useState } from "react"
// interface PostType {
//     id:number,
//     title : string,
//     body : string
//  }

// function Posts() {
//     // let data:PostType[] = [];
//     const [data , setData] = useState<PostType[] | undefined>();
//     const [isLoading , setLoading] = useState(true)
//     const [error , setError] = useState("")
//   const [page , setPage] = useState(0);
//     useEffect(()=>{
//         function fetchData(){
//             setLoading(true)
      // //  fetch("https://jsonplaceholder.typicode.com/posts")
      //  fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`)  
//         .then((response)=>{  // it is a structure data include header body 
//             return response.json(); // we extract just body here. it create promise
//         }).then((ele)=>{  // actual data in json formate
//              console.log(ele);
//             //  data = ele;
//             setData(ele)
//             setLoading(false)
//         }).catch((err:any)=>{
//                  setLoading(false)
//                 setError("Error in Loading");
//         })
//         }
//         setTimeout(fetchData,3000)
//     },[page])
//     // if(isLoading){
//     //     return <div>Loading...</div>
//     // }
//     // if(error!=""){
//     //     return <div>{error}</div>
//     // }
//   return (
//      <>
//       {isLoading && <div>Loading</div>}  //* conditional rendering , we don't need to add additional if statement
//       {error && <div>Error is Loading</div>}
//       <button onClick={()=>setPage(page+1)}>Next Page {page}</button>
//       {
//         data?.map((item)=>{
//             return(
//                 <h1>{item.title} + {item.body}</h1>
//             )
//         })
//       }
//      </>
//   )
// }
// export default Posts


//*** pending abortRef (22:00) */


//todo: Lecture 23
//! Context
//* for sending data from parent to child we use props . but if we need to send the same data from one child to another child then same we need to use props . --- Parent ---> Child ---> ChildOfChild ---> ChildOfChildOfChild.........
//* Instant of using props , we use Context . that maintain state globally . We don't need to pass data's into all child's. Context data directly accessible from each child.
// ---------- App.tsx ->  UserDashboard.tsx -> Dashboard.tsx ->  Sidebar.tsx
//? UserDashboard.tsx -
// export type UserType = {  //* this type is use in every where
//     name : string,
//     isActive : boolean
// }
// function UserDashboard() {
//     const user:UserType = {  //* this data we want to share on every child
//         name : "Code",
//         isActive : true
//     }
//   return (
//     <>
//         <Dashboard user={user}/> //* use normal props and send data to child
//     </>
//   )
// }
//? Dashboard.tsx -
// import { UserType } from "./UserDashboard";
// type DashboardProps={ 
//     user : UserType  //* import the type
// }
// function Dashboard(props:DashboardProps) {  //* receive the props  
//   return (
//    <>
//    Dashboard ---
//     {props.user.name}
//      <Sidebar user={props.user}/>   //* send again same props to childOfChild
//         <Profile user={props.user}/>
//    </>
//   )
// }
//? Sidebar.tsx-
// type SidebarProps = {
//     user : UserType
// }
// function Sidebar(props:SidebarProps) {  //* receive the props
//   return (
//     <>
//     Sidebar --- {props.user.name} //* use it
//     </>
//   )
// }

//! now we use Context replace of props 
//? UserContext.ts -  (create a context)
// import { createContext } from "react";
// import { UserType } from "./UserDashboard";
// export const UserContext = createContext<UserType|undefined>(undefined)  //* crate a UserContext
//?  UserDashboard.tsx -
// import { UserContext } from "./UserContext"  //* Import UserContext
// export type UserType = {
//     name : string,
//     isActive : boolean
// }
// function UserDashboard() {
//     const user:UserType = {  //* data that we want to use in Context
//         name : "Code",
//         isActive : true
//     }
//   return (
//     <>
        // <UserContext.Provider value={user}>  //* wrap Child using context Provider 
//             <Dashboard/>   //* now  user data is available on Dashboard and his all child's 
//         </UserContext.Provider>
//     </>
//   )
// }
// export default UserDashboard
//? Dashboard.tsx -
// import { useContext } from "react"
// import Sidebar from "./Sidebar"
// import { UserType } from "./UserDashboard"
// import { UserContext } from "./UserContext"
 
// function Dashboard() {
//     const user = useContext<UserType|undefined>(UserContext);  //* store context data 
//   return (
//    <>
//    Dashboard ---
//    {user?.name}  //* access context data
//    <Sidebar/>
//    </>
//   )
// }
// export default Dashboard
//? Sidebar.tsx -
// function Sidebar() { //* no props are used
//     const user = useContext<UserType|undefined>(UserContext)
//   return (
//     <>
//     Sidebar --- 
//     {user?.name}
//     </>
//   )
// }
// export default Sidebar


//todo: Lecture 24
//! Private Routing 
//? App.tsx -
// import { LoginContext } from "./components/LoginContext"
// import PrivateRoute from "./components/PrivateRoute"

// function App() {
//   const [name,setName] = useState<string|undefined>(undefined)
//   return (
//     <>
//       UserName : {name}
//       <div>
//         <ul>
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/login">Login</NavLink></li>
//           <li><NavLink to="/about">About</NavLink></li>
//           <li><NavLink to="/contact">Contact</NavLink></li>
//         </ul>
//       </div>
//       <LoginContext.Provider value={{name,setName}}>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="login" element={<LoginScreen/>} />
//         <Route path="/" element={<PrivateRoute/>}>  //* for private routing we make all privet routes as nested.
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         </Route>
//       </Routes>
//       </LoginContext.Provider>
//     </>
//   )
// }
// export default App
//? LoginScreen.tsx -
// import { useContext, useRef } from "react"
// import { LoginContext, UserType } from "./LoginContext";
// function LoginScreen() {
//      const inputRef = useRef<HTMLInputElement|null>(null);   //* useRef - for two way binding . 
//      const context = useContext<UserType|undefined>(LoginContext)
//      const loginHandler = ()=>{
//         // console.log(inputRef.current?.value);  //* it is the reference of the current element
//         // if(inputRef.current){
//         //     inputRef.current.value = "Code"
//         // }
//       context?.setName(inputRef.current?.value)
//      }

//      const logoutHandler = ()=>{
//         context?.setName(undefined)
//      }
//      if(context?.name){
//         return <button onClick={logoutHandler}>LogOut</button>
//      }
//   return (
//      <>
//      <input type="text" ref={inputRef}/>
//      <button onClick={loginHandler}>Login</button>
//      </>
//   )
// }
// export default LoginScreen
//? LoginContext - 
// import { createContext } from "react";

// export type UserType = {
//     name : string | undefined ,
//     setName : (args:string|undefined)=> void;
// }
// export const LoginContext = createContext<UserType|undefined>(undefined)
//? PrivateRoute.tsx -
// import { Navigate, Outlet } from "react-router-dom"
// import { LoginContext, UserType } from "./LoginContext"

// function PrivateRoute() {
//     const context = useContext<UserType | undefined>(LoginContext)
//     return (
//         <>
//             {context?.name ? <Outlet /> : <Navigate to="/login" />}  //* use private routing . check the user is exist on context or not . if exist then display child's using <Outlet/> 
//         </>
//     )
// }
// export default PrivateRoute


//todo: Lecture 25
//! Functional Programming 1
// basics -
//* 1. Function are first-class citizen
// every entity -> assign to variable , return , pass as a argument 
function sayHello(){
    console.log("hello");
}
// 1.
const fn = sayHello;  //* assign to variable
fn();
// 2.
function greet(fn){  //* function pass as an argument
    // console.log(fn());
    fn();
}
greet(sayHello)
// 3.
function say(){
    return function(){  //* function can return a function
        return "Hello"
    }
}
const f = say()  // say return a function , so we need store it's reference
console.log(f())  // f -> anonymous function
//  or , 
console.log(say()());  

//* 2. Higher order function
// a function either return a function or receives a function as an argument
//* pure function
function getNumber(num){
    return num*Math.random(); // Input is same but output is different in every time , so it is not pure function
}
function getData(num){
    return num*2  // bashed on input , output is always fix -> pure function
}
console.log(getNumber(10));
console.log(getData(10));

// if output depends upon a global variable then it is not pure function
// pure function - function depend upon own arguments

//* regular function -
function trim1(str){
      return str.trim()
}
//* arrow function -
const trim2 = (str)=>{
    return str.trim()
}
// or,   const trim2 =str=>str.trim();  //* we don't use { } so we don't return on this arrow function

const  toLower = str => str.toLowerCase();


let str = "   JavaScript   "
let output = `<div>${trim1(str)}</div>`
//or,
const wrap=str=>`<div>${str}</div>`
wrap(trim1(str)) //* nested function call
const output1 = wrap(toLower(trim1(str))) //* for simplify this type of nested function call we use - lodash module 
//? npm i lodash
// lodash - it gives function that simplify nested function call
import compose from "lodash/fp/compose.js"
import pipe from "lodash/fp/pipe.js"  // pipe is new . pipe can define sequence
import { loadConfigFromFile } from "vite";
const combineFun = compose(wrap,toLower,trim1) // right ot left calling function  // compose all functions and return a compose function reference
const pipeFun = pipe(trim1,toLower,wrap) // sequence is left to right
console.log( combineFun(str));
console.log(output);


//* curring -
// multiple arguments -> single argument
function add(a,b){
    return a+b;
}
console.log(add(4,3));
// use 2 arguments in one
function add1(a){
    return function(b){
        return a+b;
    }
}
let f1 = add1(3);
let res = f1(2);
console.log(res);
// or
console.log(add1(5)(4));


// let str="  Javascript  ";
//let output="<div>"+toLower(trim(str))+"</div>";
//let output=`<div>${str}</div>`;
//const wrap=(element,str)=>`<${element}>${str}</${element}>`;
// function wrap(element)
// {
//     return function(str)
//     {
//         return `<${element}>${str}</${element}>`;
//     }
// }
// const wrap=element=>str=>`<${element}>${str}</${element}>`;


//todo: Lecture 26
//! Functional Programming Objects
 let person = {
    "title" : "First Name"
 }
 let obj = person; // obj ->  reference of person  //* Shallow Copy
obj.title = "new name" // it change on both object . cause it is a reference
console.log(person.title +" - "+obj.title);

//* Deep Copy -
//1. for each keys add new new Items
//2. Spread Operator - 
//  Arrays -> spread -> values
//  Object -> spread -> keys
let spr = {...person} // deep copy
spr.title = "change name"
console.log(spr.title+" - "+ person.title);

let person1 ={
    "title" : "ABC",
    age:10,
    address:{  
        city:"XYZ"   // nested object
    }
}
console.log(person1);


let obj1 = {...person}
// for outer object deep copy works
obj1.title="OBJ"
console.log(obj1 , person1);
// now change inner object
obj1.address.city="obj"   // it change both 2 objects city
console.log(obj1 , person1);

// solution -
let obj2 = {
    ...person1,
    address:{
        ...person1.address
    }
}
obj2.address.city = "obj2x" // now it change only obj2 city

// this process it to complex to de structure
// we use ---> immer immutable module

// Objects -- mutable 
//  String is immutable
let st = "Ankan"
let st1 = st.toLower()
console.log(st +" - "+st1);

// now we caret object as immutable using MAP class
// import { Map } from "immutable";
// let book = {"title":"First Book" , isPublished : false}
// function publishBook(book){
//     book.isPublished = true // it change original book value , so we use deep copy . 
// }
// console.log(book);
// publishBook(book);
// console.log(book);

// so we use Map for immutable object
let book = Map({"title":"First Book" , isPublished : false})   // book is now not an object . it is a map we don't change
console.log(book.title);  // undefined
//* MAP -> API -> SET of Function
//  1.get , 2.set , 3. toJS
console.log(book.get("title")); // to access map data we use get function
const newBook = book.set("isPublished" , true) // to update map value we usr set function
console.log(book.toJS()); // convert in to normal JS

//* Immer - if we want new object
import { produce } from "immer";
import { last } from "lodash/fp";
let book3 = Map({"title":"First Book" , isPublished : false})  
produce(book3,(draftBook)=>{  // produce(object, deepCopyOfObject)
   draftBook.isPublished = true  // return updated new object
})
console.log(book3);

// now we can use publish book like -  it change only new book . don't change original one
function publishBook3(book3){
   const newBook = produce(book3,(draftBook)=>{  // produce(object, deepCopyOfObject)
   draftBook.isPublished = true  // return updated new object
})
  return newBook
}




//todo: Lecture 27
//! Redux
// Impotent 3 pillars - ACTION , STORE , REDUCER
//  ACTIONS - Kinds of Events - Dispatch
//  STORE - (existing state)
//  REDUCER - (existing sate , action) - It is a kind of event handler - It return updated state , store

//* Steps -
// 1. Design a Store (objects structure)
// 2. Define actions
// 3. Create Reducer
// 4. Setup Store

// 1.-> Design a Store (obj) structure
// Bug Tracking/Todo
[
    {
        id:Number,
        description:String,
        resolve:boolean
    }
]   // 1 reducer
//Shopping
{
        carts:[
                {}
             ]
        currentUser:{}
        categories:[]
}  // 3 slices , 3 reducers -(cart , currentUser,categories)

// 2.-> Define Actions
//  ADD_BUD, RESOLVE_BUG , DELETE_BUG
// bugAdded , bugResolved , bugDeleted
//  action => object -> flux
{
    type:"bugAdded",  // Type - a kind of action
    payload : {
        description : "First Bug"
    }
},
{
    type:"bugResolve",
    payload:{
        id:1
    }
}

// 3.-> Reducer -> a simple function have 2 arguments (state , action)
// existing state , action object (what happened)
//  return update state -> store 

// 4.-> Setup the store
import { createStore } from "redux";
let lastid = 1;
function BugReducer(state=[],action){
    if(action.type=="bugAdded"){
        const updatedState = [...state];
        updatedState.push({
            id:lastid++,
            description:action.payload.description,
            resolve:false
        })
        return updatedState;
    }
    return state;
}

function BugReducer(state=[],action){
    if(action.type=="bugResolved"){
        const updateState=state.map((item)=>{
            if(item.id==action.payload.id){
                item.resolve = true;
            }
        return item;
        })
        return updatedState;
    }
    return state;
}

// for step 4 , setup store - we need to add a library 
//? npm i redux

const store = createStore(BugReducer);

store.dispatch({
    type:"bugAdded",
    payload:{
        description:"First Bug"
    }
})

store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Second Bug"
    }
})

store.dispatch({
    type:"bugResolved",
    payload:{
        id:1
    }
})
// creating functions for bugs
const addBug= description=>{
store.dispatch({
    type:"bugAdded",
    payload:{
        description:description
    }
})
}

const delBug= id=>{
store.dispatch({
    type:"bugDeleted",
    payload:{
        id:id
    }
})
}

const resolveBug= id=>{
store.dispatch({
    type:"bugResolve",
    payload:{
        id:id
    }
})
}

// now we can call this function's in UI
// we use Redux Persist - if we reload page it store context
console.log(store.getState());




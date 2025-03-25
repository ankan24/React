import { Outlet } from "react-router-dom"


function Dashboard() {
  return (
    <div>
        Dashboard
        {/* //! we need to use outlet for nested routing */}
       <Outlet/>     
    </div>
  )
}

export default Dashboard
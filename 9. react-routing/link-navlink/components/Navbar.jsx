import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";

//!  <a href="/"> ->>> we don't use the anchor tag because it will refresh the page all time.
//!  we use the Link or NavLink tag from react-router-dom.
//! In NavLink there is a extra features. it gives a by default active class (isActive)
function Navbar() {
  return (
    <div className='navbar'>
        {/* //! Anchor Tag */}
            {/* <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About</a></li>
            </ul> */} 
         {/* //! Link Tag */}
            {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul> */}

            {/* //! NavLink Tag */}
            <ul>
                <li><NavLink to="/" className={(isActive)=> isActive ? "active-link" : ""}>Home</NavLink></li>
                <li><NavLink to="/dashboard" className={(isActive)=> isActive ? "active-link" : ""}>Dashboard</NavLink></li>
                <li><NavLink to="/about" className={(isActive)=> isActive ? "active-link" : ""}>About</NavLink></li>
            </ul>
    </div>
  )
}

export default Navbar
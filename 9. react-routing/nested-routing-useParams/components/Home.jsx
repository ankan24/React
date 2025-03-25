import { useNavigate } from "react-router-dom"
//! useNavigate -> navigate any page without reloading

function Home() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about');
    }
  return (
    <>
    <div>Home</div>
    <button onClick={handleClick}>move to about</button>
    </>
  )
}

export default Home
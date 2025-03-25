import { useNavigate } from "react-router-dom"


function About() {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/dashboard")
    }
  return (
    <div>
        <div>About</div>
        <button onClick={handleClick}>move to dashboard</button>
    </div>
  )
}

export default About
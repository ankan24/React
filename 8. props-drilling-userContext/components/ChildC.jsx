import { useContext } from "react"
// import { UserContext } from "../App"
import { ThemeContext } from "../App"

function ChildC() {
    // const user = useContext(UserContext);
    const {theme , setTheme} = useContext(ThemeContext);

    const handleClick = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }
  return (
    <div>
        {/* {user.name} */}
        <button onClick={handleClick}>
            change theme
        </button>
    </div>
  )
}

export default ChildC
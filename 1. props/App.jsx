import UserCard from "./components/UserCard"
import img1 from "./assets/icon1.png"
import img2 from "./assets/icon2.png";
import img3 from "./assets/icon3.png";

function App() {
  return (
    <div>
      <UserCard name="Ag" img={img1} style={{"border-radius":"10px"}}/>
      <UserCard  name="Ga" img={img2} style={{"border-radius":"10px"}}/>
      <UserCard name="XX" img={img3} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
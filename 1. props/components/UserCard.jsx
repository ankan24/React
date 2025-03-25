// import pic from '../assets/react.svg'
import './UserCard.css';
function UserCard(props) {
  return (
    <div className="user-card" style={props.style}>
        <p>{props.name}</p>
        <img src={props.img} alt={props.name} />
        <p>description </p>
    </div>
  )
}

export default UserCard;
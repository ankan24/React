

function Card(props) {
  return (
    <div>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}}/>
      <p>Name state variable ki value inside Child {props.title} : {props.name}</p>
    </div>
  )
}

export default Card
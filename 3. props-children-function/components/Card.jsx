import "./Card.css"
function Card({name,children}) {   //! props destructuring -> {name}
  return (
    <div className="card">
     <div>{name}</div>
      <div>{children}</div>
    </div>
   
  )
}

export default Card
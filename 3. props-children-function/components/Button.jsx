
function Button(props) {
  return (
    <>
    <button onClick={props.fun}>
        {props.text}
    </button>
    {props.children}
    </>
 
  )
}

export default Button
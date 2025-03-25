import { useParams } from "react-router-dom"


function ParamComp() {
    const {id} = useParams();
  return (
    <div>
        Params: {id}
    </div>
  )
}

export default ParamComp
import { Link } from "react-router-dom"
import './index.css'

const ButtonDetail = (props) => {
    return(
        <>
            <Link to={`/personaje/${props.id}`}><button>DETALLES</button></Link>
        </>
    )
}

export default ButtonDetail
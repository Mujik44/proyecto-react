import { useContext } from "react"
import { CartContext } from "../../context/Cart/Provider"
import './index.css'

const ButtonAdd = (props) => {

    const { addItemToCart } = useContext(CartContext);

    return(
        <div className="contButton">
            <button className="Button" onClick={() => addItemToCart(props.data)}> 
                Agregar al carrito
            </button>
        </div>
    )
}

export default ButtonAdd
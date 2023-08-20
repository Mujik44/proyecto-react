import { useContext } from "react"
import { CartContext } from "../../context/Cart/Provider"
import './index.css'

const ItemCount = (props) => {

    const { addItemToCart } = useContext(CartContext);

    return(
        <div className="Counter">
            <button className="Button" onClick={() => addItemToCart(props.data)}> 
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const CartWidget = (props) => {
    return (
        <div className="contCarrito">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#f01919",}} />
            <p>0</p>
        </div>
    )
}

export default CartWidget;
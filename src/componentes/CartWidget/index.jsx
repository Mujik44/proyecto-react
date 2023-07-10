import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const CartWidget = () => {
    return (
        <div className="contCarrito">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#f01919",}} />
            <p>5</p>
        </div>
    )
}

export default CartWidget;
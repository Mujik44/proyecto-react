import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/Cart/Provider";
import "./index.css";
import { Link } from "react-router-dom";

const CartWidget = (props) => {

    const { productos, quantity } = useContext(CartContext);
    console.log('productos:', productos)

    return (
        <Link to={'/checkout'}>
            <button className="contCarrito">
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#f01919",}} />
                <p>{quantity}</p>
            </button>
        </Link>
    )
}

export default CartWidget;
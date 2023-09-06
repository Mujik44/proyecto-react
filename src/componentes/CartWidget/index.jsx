import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/Cart/Provider";
import "./index.css";
import { Link } from "react-router-dom";

const CartWidget = (props) => {

    const { quantity, Return } = useContext(CartContext);

    return (
        <Link to={'/cart'}>
            <div className="contCarrito" onClick={() => Return()}>
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#f01919",}} />
                <p>{quantity}</p>
            </div>
        </Link>
    )
}

export default CartWidget;
import { useState } from 'react';
import './index.css'

const ItemCount = (props) => {

    const stock = props.stock;
    let cantidad = props.cantidad;

    const [quantity, setQuantity] = useState(cantidad)

    const increase = () => {
        if (quantity <= stock) {
            setQuantity(quantity+1);
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity-1);
        }
    }
    
    return(
        <div className="contCount">
            <button className="decrease" onClick={decrease}>-</button>
            <h3 className="quantityProduct">{quantity}</h3>
            <button className="increase" onClick={increase}>+</button>
        </div>
    )
}

export default ItemCount
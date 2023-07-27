import { useState } from "react"
import './index.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const incremento = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decremento = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decremento}>-</button>
                <h3 className="Number">{quantity}</h3>
                <button className="Button" onClick={incremento}>+</button>                
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount
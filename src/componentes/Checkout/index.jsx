import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/Cart/Provider"
import './index.css'

const Checkout = (props) => {

    const { productos } = useContext(CartContext);

    console.log(productos)

    // function renderCompra(){

    //     const compraList = productos.map((personaje) => {
    //     const contador = 1  

    //         for (let i = 0; i < productos.length; i++) {
    //             if (productos[i+1] === productos[i]) {
    //                 cantidad++;
    //             }
    //             else{

    //             }
    //         }

    //         const name = personaje.name;
    //         const image = personaje.image;
    //         const price = personaje.price;
    //         const cantidad = cantidad;

    //     })

    //     return(

    //     )
    // }

    return(
        <>
            <div className="contCheckout">
                <div className="contTitulo">
                    <h2>CARRITO DE COMPRA</h2>
                </div>
                <div className="contResumen">
                    
                </div>
            </div>
        </>
    )
}

export default Checkout
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext, useState } from "react"
import { CartContext } from "../../context/Cart/Provider"
import ButtonBuy from "../ButtonBuy";
import './index.css'

const Checkout = () => {

    const { productos, removeItemToCart, isContCheckout, Return } = useContext(CartContext);

    let contenido = false;

    if (productos.length > 0) {
        contenido = true;
    }

    let total = 0;

    function renderCompra(){

        const compraList = productos.map((personaje) => {

            const id = personaje.id;
            const name = personaje.name;
            const image = personaje.image;
            const price = personaje.price;
            const cantidad = personaje.cant;  

            total += price*cantidad;

            const resultado = personaje;

            return(
                <>
                    {isContCheckout 
                        ?   <div className="contProduct">
                                <h2 className="nameProduct">{name}</h2>
                                <div className="contImage"><img src={image} alt={name}/></div>
                                <h3 className="quantityProduct">{cantidad}</h3>
                                <h3 className="priceProduct">{price*cantidad} $</h3>
                                <div className="eliminate" onClick={() => {removeItemToCart(resultado)}}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></div>
                            </div> 
                        :   <div className="contProductResumen">
                                <h2 className="nameProductResumen">{name}</h2>
                                <h3 className="quantityProductResumen">X {cantidad}</h3>
                                <h3 className="priceProductResumen">{price*cantidad} $</h3>
                                <div className="eliminate" onClick={() => {removeItemToCart(resultado)}}><FontAwesomeIcon icon={faTrash} style={{color: "#ff0000",}} /></div>
                            </div>
                    }
                </>
            )
        })
        return compraList;
    }

    return(
        <>
            <div className={isContCheckout ? "contCheckout" : "contCheckout disabled"}>
                <div className="contTitulo">
                    <h2>CARRITO DE COMPRA</h2>
                </div>
                <div className="contResumen">
                    {contenido ? renderCompra() : <p>El carrito esta vacio 😢</p>}
                </div>
                <div className="totalTitle">
                    {contenido ? <h2>TOTAL: {total} $</h2> : <></>}
                </div>
                <div>
                    <ButtonBuy
                        contenido={contenido}
                    />
                </div>
            </div>
            <div className={isContCheckout ? "contCheckoutFinal disabled" : "contCheckoutFinal"}>
                <div className="contUnir">
                    <div className="return" onClick={() => Return()}>
                        <FontAwesomeIcon icon={faRotateLeft} style={{color: "#ff0000",}} />
                    </div>
                    <div className="contDatos">
                        <div className="titleDatos">
                            <h2>DATOS PERSONALES</h2>    
                        </div>
                        <div className="contInputs">
                            <input type="text" className="inputNombres" placeholder="Nombres"/>
                            <input type="text" className="inputApellidos" placeholder="Apellidos"/>
                            <input type="text" className="inputNumber" placeholder="Numero de Celular" />
                        </div>
                        <div>
                            <button className="btnComprar">COMPRAR</button>
                        </div>
                    </div>
                </div>
                <div className="contResumenFinal">
                    <div className="titleResumenFinal">
                        <h2>RESUMEN</h2>
                    </div>
                    <div className="contProductsResumen">
                        {renderCompra()}
                    </div>
                    <div className="totalTitle">
                        <h2>TOTAL: {total/2} $</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
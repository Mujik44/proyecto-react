import { createContext, useState } from "react"
import React from "react";

export const CartContext = createContext();

export default function CartProvider ({ defaultValues = [], children}) {

    const [productos, setProductos] = useState( JSON.parse(localStorage.getItem("carrito")) || []);
    let cantidad = 0;

    function addItemToCart(item){

        const resultado = productos.find((producto) => producto.id === item.id) 

        console.log(resultado)

        if (resultado === undefined) {
            setProductos([...productos,item])
            localStorage.setItem("carrito", JSON.stringify([...productos, item]))
        }
        else{
            if (resultado.id === item.id) {
                const updateProducts = productos.map(p => p.id === item.id
                    ? {...p, cant: resultado.cant + 1}
                    : p
                );
                setProductos(updateProducts)
                localStorage.setItem("carrito", JSON.stringify(updateProducts))
            }
        }
    }

    productos.map(productos => {
        cantidad+= productos.cant;
    })

    function removeItemToCart(item) {

        const resultado = productos.find((producto) => producto === item);

        setProductos(productos.filter((carrito) => {
            return carrito !== resultado;
        }));

        const updateProducts = productos.filter(p => p.id !== item.id)

        localStorage.setItem("carrito", JSON.stringify(updateProducts))
    }

    const [isContCheckout, setContCheckout] = useState(true)

    function Buy(){
        setContCheckout(false)
    }

    function Return(){
        setContCheckout(true)
    }

    return(
        <CartContext.Provider value={{
            name: 'CartContext',
            addItemToCart,
            removeItemToCart,
            Buy,
            Return,
            isContCheckout,
            quantity: cantidad,
            productos}}>
            {children}
        </CartContext.Provider>
    )
}
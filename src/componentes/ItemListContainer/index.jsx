import "./index.css"
import portada from "../img/portada.webp"

const ItemListContainer = (propiedades) => {
    return(
        <>
            <p className="parrafoItems">{propiedades.valor}</p>
            <div className="contPortada"><img src= {portada} alt="portada de la tienda"/></div>
        </>
    )
}

export default ItemListContainer;
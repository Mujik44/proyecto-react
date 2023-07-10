import "./index.css"
import portada from "C:/WorkSpace/proyecto-react-Angel_Mujica/proyecto-react/src/img/portada.webp"

const ItemListContainer = () => {
    return(
        <>
            <p className="parrafoItems">BIENVENIDOS A BRAWL STARS STORE</p>
            <div className="contPortada"><img src= {portada} alt="portada de la tienda"/></div>
        </>
    )
}

export default ItemListContainer;
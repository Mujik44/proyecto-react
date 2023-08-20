import Item from "../Item"
import ItemCount from "../ItemCount"
import ButtonDetail from "../ButtonDetail"
import './index.css'

const ItemListContainerAliens = (props) => {

    function renderPersonajes () {

        const personajesList = props.data.map((personaje) => {

            if(personaje.species === "Aliens"){

                const name = personaje.name;
                const image = personaje.image;
                const gender = personaje.gender;
                const species = personaje.species;
    
                return(
                    <div className="contenedorItemButton">
                        <Item
                            name = {name}
                            image = {image}
                            gender = {gender}
                            species = {species}
                        />
                        <ButtonDetail
                            id={personaje.id}
                        />
                        <ItemCount
                            data={personaje}
                        />
                    </div>
                )
            }
        })
        return personajesList;
    }  
    return(
        <div className="contenedorPersonajesAliens">
            {renderPersonajes()}
        </div>
    )
}

export default ItemListContainerAliens
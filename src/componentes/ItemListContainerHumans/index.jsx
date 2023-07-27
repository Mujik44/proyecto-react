import Item from "../Item"
import ItemCount from "../ItemCount"
import ButtonDetail from "../ButtonDetail"
import './index.css'

const ItemListContainerHumans = (props) => {
    
    function renderPersonajes () {

            const personajesList = props.data.map((personaje) => {

                if(personaje.species === "Human"){

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
                                initial={1}
                                stock={12}
                                onAdd={(quantity) => console.log('Cantidad agregada', quantity)}
                            />
                        </div>
                    )
                }
            })
            return personajesList;
    }  
    return(
        <div className="contenedorPersonajesHumanos">
            {renderPersonajes()}
        </div>
    )
}

export default ItemListContainerHumans
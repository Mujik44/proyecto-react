import Item from "../Item"
import ButtonAdd from "../ButtonAdd"
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
                const price = personaje.price;
    
                return(
                    <div className="contenedorItemButton">
                        <Item
                            name = {name}
                            image = {image}
                            gender = {gender}
                            species = {species}
                            price = {price}
                        />
                        <ButtonDetail
                            id={personaje.id}
                        />
                        <ButtonAdd
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
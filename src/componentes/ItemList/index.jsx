import { useState, useEffect } from "react";
import './index.css'
import Item from '../Item'
import ButtonDetail from "../ButtonDetail";
import ItemCount from "../ItemCount";

const ItemList = (props) => {

    function renderPersonajes () {

        const personajesList = props.data.map((personaje) => {

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

        })
        return personajesList;
    } 

    return(
        <div className="contenedorLista">
            {renderPersonajes()}
        </div>
    )
}

export default ItemList 
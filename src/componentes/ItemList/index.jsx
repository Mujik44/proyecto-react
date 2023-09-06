import { useState, useEffect } from "react";
import Item from '../Item'
import ButtonDetail from "../ButtonDetail";
import ButtonAdd from "../ButtonAdd";
import './index.css'

const ItemList = (props) => {

    function renderPersonajes () {

        const personajesList = props.data.map((personaje) => {

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
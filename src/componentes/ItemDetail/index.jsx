import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useEffect, useState } from 'react';
import './index.css'

const ItemDetail = (props) => {

    const {id} = useParams();
    const [personaje, setPersonaje] = useState(null)
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setPersonaje(res)
        })
    }, [id])

    return(
        <>
            <div className='contenedorImagen'>
                <h1>{personaje?.name}</h1>
                <img src={personaje?.image} alt={personaje?.name} />
            </div>
            <div className='contenedorInfo'>
                <h2>Creado: {personaje?.created}</h2>
                <h2>Localización: {personaje?.location.name}</h2>
                <h2>Origen: {personaje?.origin.name}</h2>
                <h2>Especie: {personaje?.species}</h2>
                <h2>Estatus: {personaje?.status}</h2>
                <ItemCount
                    initial={1}
                    stock={12}
                    onAdd={(quantity) => console.log('Cantidad agregada', quantity)}
                />
            </div>
        </>
    )
}

export default ItemDetail
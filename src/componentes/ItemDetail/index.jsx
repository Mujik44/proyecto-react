import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import './index.css'

const firebaseConfig = {
    apiKey: "AIzaSyCc01Ci22qSQ5eSIZ6nwzG55jugHBxZvvE",
    authDomain: "react-proyect-coder-91505.firebaseapp.com",
    projectId: "react-proyect-coder-91505",
    storageBucket: "react-proyect-coder-91505.appspot.com",
    messagingSenderId: "1091677016359",
    appId: "1:1091677016359:web:47b5116fcc435ecd275902",
    measurementId: "G-1J4120EPJB"
};

initializeApp(firebaseConfig);

const ItemDetail = (props) => {

    const {id} = useParams();
    // const [personaje, setPersonaje] = useState(null)

    // useEffect(() => {
    //     const data = [];
    //     const db = getFirestore();
    //     const product = doc(db, 'products', `${id}`);
    //     getDoc(product)
    //         .then((snapshot) => {
    //             if(snapshot.exists()){
    //                 setPersonaje(snapshot.data())
    //             }
    //         })
    //         .catch((error) => {
    //         console.log("error :"+ error)
    //         })
    // },[id])

    const personaje = props.data[id-1]

    // const name = personaje.name;
    // const image = personaje.image;
    // const gender = personaje.gender;
    // const species = personaje.species;
    // const created = personaje.created;
    // const location = personaje.location;
    // const origin = personaje.origin;
    // const status = personaje.status;

    return(
        <>
            <div className='contenedorImagen'>
                <h1>{personaje.name}</h1>
                <img src={personaje.image} alt={personaje.name}/>
            </div>
            <div className='contenedorInfo'>
                <h2>Género: {personaje.gender}</h2>
                <h2>Creado: {personaje.created}</h2>
                <h2>Localización: {personaje.location.name}</h2>
                <h2>Origen: {personaje.origin.name}</h2>
                <h2>Especie: {personaje.species}</h2>
                <h2>Estatus: {personaje.status}</h2>
                <ItemCount
                    data={personaje}
                />
            </div>
        </>
    )
}

export default ItemDetail
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainerHumans from "./componentes/ItemListContainerHumans";
import ItemListContainerAliens from "./componentes/ItemListContainerAliens";
import Checkout from "./componentes/Checkout";
import CartProvider from "./context/Cart/Provider";
import { useContext } from "react";
import { CartContext } from "./context/Cart/Provider";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import "./App.css"

const firebaseConfig = {
  apiKey: "AIzaSyCc01Ci22qSQ5eSIZ6nwzG55jugHBxZvvE",
  authDomain: "react-proyect-coder-91505.firebaseapp.com",
  projectId: "react-proyect-coder-91505",
  storageBucket: "react-proyect-coder-91505.appspot.com",
  messagingSenderId: "1091677016359",
  appId: "1:1091677016359:web:47b5116fcc435ecd275902",
  measurementId: "G-1J4120EPJB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  // useEffect(() => {
  //   const db = getFirestore();
  //   const product = doc(db, 'products', 'Y98DSySqHycKZ8IJ0OYj');
  //   getDoc(product)
  //     .then((snapshot) => {
  //       if(snapshot.exists()){
  //         console.log('snapshot:', snapshot.data())
  //         console.log('snapshot:', snapshot.id)
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('error:', error)
  //     })
  // }, [])

  // useEffect(() => {
  //   const db = getFirestore();
  //   const productCollection = collection(db, 'products');
  //   getDocs(productCollection)
  //     .then((snapshot) => {
  //       snapshot.docs.map((product) => {
  //         setPersonajes(product.data()) 
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('error: ', error)
  //     })
  // })

  const[personajes, setPersonajes] = useState([])

  const fullContext = useContext(CartContext);

  useEffect(() => {
    // fetch('https://rickandmortyapi.com/api/character/?page=10')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((response) => {
    //     setPersonajes(response.results)
    //   })
    const data = [];
    const db = getFirestore();
    const productCollection = collection(db, 'products');
    getDocs(productCollection)
      .then((snapshot) => {
        console.log(snapshot.docs)
        snapshot.docs.map((product) => {  
          data.push(product.data())
        })
        console.log(data)
        setPersonajes(data)
      })
      .catch((error) => {
        console.log("error :"+ error)
      })
  }, [])

  return (
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <main id="mainContenedor">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ItemListContainer
              data={personajes}
            />
          }
        />
        <Route
          exact
          path="cart"
          element={
            <Checkout/>
          }
        />
        <Route
          exact
          path="personaje/:id"
          element={
            <ItemDetailContainer
              data={personajes}
            />
          }
        />
        <Route
          exact
          path="categoria/humans"
          element={
            <ItemListContainerHumans
              data={personajes}
            />
          }
        />
        <Route
          exact
          path="categoria/aliens"
          element={
            <ItemListContainerAliens
              data={personajes}
            />
          }
        />
        </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

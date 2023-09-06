import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainerHumans from "./componentes/ItemListContainerHumans";
import ItemListContainerAliens from "./componentes/ItemListContainerAliens";
import Checkout from "./componentes/Checkout";
import CartProvider from "./context/Cart/Provider";
import { useContext } from "react";
import { CartContext } from "./context/Cart/Provider";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "./App.css"

function App() {

  const[personajes, setPersonajes] = useState([])

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

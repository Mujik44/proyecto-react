import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemListContainerHumans from "./componentes/ItemListContainerHumans";
import ItemListContainerAliens from "./componentes/ItemListContainerAliens";
import "./App.css"

function App() {

  const[personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        setPersonajes(response.results)
      })
      .catch((error) => {
        console.log("error :"+ error)
      })
  }, [])

  return (
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
          path="personaje/:id"
          element={
            <ItemDetailContainer/>
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
  )
}

export default App

import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import CharCard from "./components/CharacterCard";
import Navigation from "./components/LocationsList";
export default function App() {
  const [CharacterData, setCharacterData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacterData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <main>
      <Header />
      <CharCard charInfo={CharacterData.results} />
      <Navigation />;
    </main>
  );
}

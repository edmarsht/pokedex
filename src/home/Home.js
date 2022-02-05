import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../card/Card";
import axios from "axios"

function Home() {

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`
    ).then((res) => setPokemonData(res.data.results));
      }, []);


  return (
    <div className="container__home">
      <div className="home section__padding">
        <div className="home__contain">
          <h1>Pokedex</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            alt=""
          />
        </div>
      </div>
      <div className="home__card">
        {pokemonData.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
        
      </div>
    </div>
  );
}

export default Home;

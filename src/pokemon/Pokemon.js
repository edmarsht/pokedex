import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Pokemon.css";

function Pokemon() {
  const params = useParams();

  const index = params.pokemonIndex;
    
  const [pokemonRes, setPokemonRes] = useState([]);
  
  useEffect(() => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((res) => setPokemonRes(res.data));
    }, []);

    const name = pokemonRes.name;

  return (
    <div className="pokemon">
      <div className="pokemon__container">
        <h1>{name}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Pokemon;

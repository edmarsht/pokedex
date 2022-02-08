import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import axios from "axios";
import { useParams} from "react-router-dom";

function Pokemon() {

    const params = useParams()
    console.log(params);

    const index = params.pokemonIndex;

    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`


    const [pokemonRes, setPokemonRes] = useState([])

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`
      ).then((res) => setPokemonRes(res.data));
    }, []);


  return (
    <div>
      <h1>Coucou {index}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`} alt="" />
    </div>
  );
}

export default Pokemon;

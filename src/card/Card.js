import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ key, name, url }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const index = url.split("/")[url.split("/").length - 2];
  const nameUpper = capitalizeFirstLetter(name);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`;

  return (
    <div className="card">
         <Link to={`pokemon/${index}`}>
      <div className="card__container">
        <div className="card__container-title">
          <h1>{nameUpper}</h1>
          <img src={image} alt={name} />
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card;

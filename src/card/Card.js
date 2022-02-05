import React, { useState } from "react";
import "./Card.css";
import spinner from "./spinner.gif"

function Card({ key, name, url }) {


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const index = url.split('/')[url.split('/').length - 2]
    const nameUpper = capitalizeFirstLetter(name)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`
    const [loading, setLoading] = useState(true)
    const [toManyRequest, setToManyRequest] = useState(false)



  return (
    <div className="card">
      <div className="card__container">
        <div className="card__container-title">
          <h1>{nameUpper}</h1>
          <img onError={() => setToManyRequest(true)} onLoad={() => setLoading(false)} src={image} alt={name} />
          {/* {toManyRequest ? <div className="loading"><img src={spinner} alt="spinner" /></div> : ""} */}
        </div>
      </div>
    </div>
  );
}

export default Card;

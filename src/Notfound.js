import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css"

function Notfound() {
  return (
    <div className="notfound">
      <h1>Sorry, that page can not be found</h1>
      <Link to="/">
        <h2>Back to the home page</h2>
      </Link>
    </div>
  );
}

export default Notfound;

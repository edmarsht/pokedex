import './App.css';
import Home from "./home/Home"
import Pokemon from "./pokemon/Pokemon"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />

      </Routes>
    </div>
  );
}

export default App;

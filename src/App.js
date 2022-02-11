import './App.css';
import Home from "./home/Home"
import Pokemon from "./pokemon/Pokemon"
import Notfound from "./Notfound"
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonIndex" element={<Pokemon />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </div>
  );
}

export default App;

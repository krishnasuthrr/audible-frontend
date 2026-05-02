import Hero from "./components/Hero"
import Login from "./components/Login";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

const App = () => {

  return (
    <>
        <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </>
  );
}

export default App
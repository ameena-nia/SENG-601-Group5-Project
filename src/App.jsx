import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import "./App.css"

function App () {
    return (
      <>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
}

export default App;

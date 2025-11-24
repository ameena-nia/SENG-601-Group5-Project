import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Ethics from "./Pages/Ethics";
import Events from "./Pages/CurrentEvents";
import Views from "./Pages/Views";
import ToDo from "./Pages/ToDo";
import Sources from "./Pages/Sources";
import "./App.css"

function App () {
    return (
      <>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ethics" element={<Ethics />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/views" element={<Views />}/>
            <Route path="/todo" element={<ToDo />}/>
            <Route path="/sources" element={<Sources/>}/>
        </Routes>
      </>
    );
}

export default App;

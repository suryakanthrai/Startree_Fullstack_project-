import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </div>
      </div>
  );
};

export default App;

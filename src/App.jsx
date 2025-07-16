// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About.jsx";
import Contact from "./page/Contact.jsx";
import Home from "./page/Home.jsx";
import Navbar from "./page/component/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

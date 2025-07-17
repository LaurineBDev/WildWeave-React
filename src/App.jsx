// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collection from "./page/Collection.jsx";
import Contact from "./page/Contact.jsx";
import Engagement from "./page/Engagement.jsx";
import Home from "./page/Home.jsx";
import Navbar from "./page/component/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/collection" element={<Collection />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

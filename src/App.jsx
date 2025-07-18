// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Collection from "./page/Collection.jsx";
import Navbar from "./page/component/Navbar.jsx";
import Contact from './page/Contact.jsx';
import ContactForm from './page/ContactForm.jsx';
import Engagement from "./page/Engagement.jsx";
import Home from "./page/Home.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/collection" element={<Collection />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/form" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

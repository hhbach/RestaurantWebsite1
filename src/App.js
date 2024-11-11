import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import DetailedItem from './components/DetailedItem.js';
import './App.css';
import config from './config.json';

import { configure } from '@testing-library/react';

export const UserContext = React.createContext();

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isLoading, setIsLoading] = useState(true);



  return (
    <UserContext.Provider value={{ config, isLoading, isEnglish, setIsEnglish }}>
      <BrowserRouter>
        <NavBar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu/:category/:item" element={<DetailedItem/>}/>
          <Route path="/menu/:category" element={<Menu/>}/>
          <Route path="/" element={<Menu/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
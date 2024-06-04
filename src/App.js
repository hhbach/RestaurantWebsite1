import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import yaml from 'js-yaml';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import DetailedItem from './components/DetailedItem.js';
import './App.css';

export const UserContext = React.createContext();

function App() {
  const [data, setData] = useState(null);
  const [imageDictionary, setImageDictionary] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/config.yaml')
      .then(response => response.text())
      .then(text => {
        const doc = yaml.safeLoad(text);
        console.log(text)
        setData(doc);

      })
      .catch(error => {
        console.error(error);

      });
  }, []);


  return (
    <UserContext.Provider value={{ data }}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu/:category/:item" element={<DetailedItem/>}/>
          <Route path="/menu/:category" element={<Menu/>}/>
          <Route path="/" element={<Menu/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
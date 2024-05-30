import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar.js';
import Menu from './components/Menu.js';
import Contact from './components/Contact.js';
import MenuCategory from './components/MenuCategory.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu/:category" element={<Menu/>}/>
        <Route path="/" element={<Menu/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React, { useEffect, useState, useContext } from 'react';
import { Link} from "react-router-dom";
import './Navbar.css';
import './Footer.css';
import { UserContext } from '../App.js';

const Navbar = () => {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
    const { isEnglish, setIsEnglish} = useContext(UserContext);

    const toggleNavbarVisibility = (event) => {
        //event.stopPropagation();
        setIsNavbarExpanded(!isNavbarExpanded);
        
    };

    useEffect(() => {
        const navbarToggle = document.querySelector("#navbar-toggle");
        const navbarMenu = document.querySelector("#navbar-menu");
        const languageCB = document.querySelector("#language-cb");

        languageCB.addEventListener("click", handleLanguageChange);
        navbarToggle.addEventListener("click", toggleNavbarVisibility);
        navbarMenu.addEventListener("click", toggleNavbarVisibility);

        return () => {
            languageCB.removeEventListener("click", handleLanguageChange);
            navbarToggle.removeEventListener("click", toggleNavbarVisibility);
            navbarMenu.removeEventListener("click", toggleNavbarVisibility);
        };

    }, [isNavbarExpanded]);



    const handleLanguageChange = (event) => {
        setIsEnglish(!isEnglish);
        // Here you can implement the logic to change the language of your website
    }

    return (
        <header id="navbar">
            <nav className="navbar-container container">
                
            <Link to="/" className="home-link">
                 <h2> {isEnglish? 'Pho Chandler' : 'Phở Chandler'} </h2>
            </Link>
                <button 
                    type="button" 
                    id="navbar-toggle" 
                    aria-controls="navbar-menu" 
                    aria-label="Toggle menu" 
                    aria-expanded={isNavbarExpanded}
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                    <ul className="navbar-links">
                        <li>
                            <Link className="navbar-item navbar-link" to="/menu"><h2>{isEnglish ? 'Menu' : 'Thực đơn'}</h2></Link>
                        </li>
                        <li>
                            <Link className="navbar-item navbar-link" to="/contact"><h2>{isEnglish ? 'Contact' : 'Liên hệ'}</h2></Link>
                        </li>
                        <li>
                        <div className="language-switcher">
                                <label className="switch">
                                <input id="language-cb" type="checkbox" checked={!isEnglish} onChange={(event) => handleLanguageChange(event)} />
                                    <span className="slider round"></span>
                                </label>
                                <p className='switch-label'>{isEnglish ? 'Tiếng Việt' : 'English'}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
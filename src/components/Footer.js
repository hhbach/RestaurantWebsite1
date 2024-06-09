import React, { useEffect, useState, useContext} from 'react';
import { NavLink as Link } from "react-router-dom";
import './Footer.css';
import { UserContext } from '../App.js';

const Footer = () => {
    const { isEnglish, setIsEnglish } = useContext(UserContext); 

    const handleLanguageChange = () => {
        setIsEnglish(!isEnglish);
        // Here you can implement the logic to change the language of your website
    }

    return (
        <div className='footer'>
            <footer className="footer-container grid">
                <div className="footer-links">
                    <Link to="/contact" className="footer-link">
                        <h2>{isEnglish ? 'Contact' : 'Liên hệ'}</h2>
                    </Link>
                    <Link to="/menu" className="footer-link">
                        <h2>{isEnglish ? 'Menu' : 'Thực đơn'}</h2>
                    </Link>
                </div>

                <div className="language-switcher">
                    <label className="switch">
                        <input type="checkbox" checked={!isEnglish} onChange={handleLanguageChange} />
                        <span className="slider round"></span>
                    </label>
                    <p className='switch-label'>{isEnglish ? 'English' : 'Tiếng Việt'}</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
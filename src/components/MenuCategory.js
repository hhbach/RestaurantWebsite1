import React, { useEffect, useState, useContext} from 'react';
import './MenuCategory.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../App.js';

const MenuCategory = (props) => {

    const { isEnglish } = useContext(UserContext); 
    
    return (
        <div className="menu-item">
            <Link to={`/menu/${props.category}`}>
            <div className="foodimage"> <img src={props.image}></img></div>
            <div className="item-title">
                <h2 className="menu-item-title"> {!isEnglish && props.altname ?  props.altname : props.category }</h2>
            </div>
            </Link>
        </div>
    );
}

export default MenuCategory;
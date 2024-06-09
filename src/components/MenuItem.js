import React, { useEffect, useState, useContext} from 'react';
import './MenuItem.css'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App.js';

const MenuItem = (props) => {
    const { category } = useParams();
    const { isEnglish} = useContext(UserContext);
    
    return (
        
        <div className="menu-item">
            <Link to={`/menu/${category}/${props.title}`}>
            <div className="foodimage"><img src={props.image}/></div>
            </Link>
            <div className="item-title">
                <h3 className="menu-item-title">{!isEnglish && props.altname ? props.altname : props.title}</h3>
                <p className="menu-item-price"> <h4> ${props.price}</h4></p>
            </div>
            <br/>
            <p className="menu-item-description">{props.description}</p>
        </div>
    );
}

export default MenuItem;
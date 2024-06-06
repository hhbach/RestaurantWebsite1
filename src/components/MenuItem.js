import React, { useEffect, useState } from 'react';
import './MenuItem.css'
import { Link, useParams } from 'react-router-dom';

const MenuItem = (props) => {
    const { category } = useParams();
    
    return (
        
        <div className="menu-item">
            <Link to={`/menu/${category}/${props.title}`}>
            <div className="foodimage"><img src={props.image}/></div>
            </Link>
            <div className="item-title">
                <h3 className="menu-item-title">{props.title}</h3>
                <p className="menu-item-price"> <h3> ${props.price}</h3></p>
            </div>
            <br/>
            <p className="menu-item-description">{props.description}</p>

        </div>
    );
}

export default MenuItem;
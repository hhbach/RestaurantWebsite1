import React, { useEffect, useState } from 'react';

import './MenuCategory.css'
import { Link } from 'react-router-dom';

const MenuCategory = (props) => {

    
    return (
        <div className="menu-item">
            <Link to={`/menu/${props.category}`}>
            <div className="foodimage"> <img src={props.image}></img></div>
            <div className="item-title">
                <h2 className="menu-item-title">{props.category}</h2>
            </div>
            </Link>
        </div>
    );
}

export default MenuCategory;
import React, { useEffect, useState } from 'react';
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <div className="foodimage"><img src={props.image}/></div>
            <div className="item-title">
                <h3 className="menu-item-title">{props.title}</h3> ---
                <p className="menu-item-price">${props.price}</p>
            </div>

            <p className="menu-item-description">{props.description}</p>
        </div>
    );
}

export default MenuItem;
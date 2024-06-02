import React, { useEffect, useState } from 'react';
import './DetailedItem.css'
import { Link, useParams } from 'react-router-dom';

const DetailedItem = (props) => {
    const { category, item} = useParams();
    return (
        <div className="Item">
            <h1 style={{textAlign:"center", "padding" : "20px"}}>
                <Link to={`/menu`}>Menu</Link>{' '} / {' '} 
                <Link to={`/menu/${category}`}> {category} </Link>
                <h1> {item}</h1>
            </h1>

            
            <div className="foodimage"><img src={props.image}/></div>
            <div className="item-title">
                
                <p className="menu-item-price">${props.price}</p>
            </div>

            <p className="menu-item-description">{props.description}</p>
        </div>
    );
}

export default DetailedItem;
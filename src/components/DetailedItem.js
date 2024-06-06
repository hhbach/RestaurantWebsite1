import React, { useEffect, useState, useContext } from 'react';
import './DetailedItem.css'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App.js';



const DetailedItem = (props) => {
    const { category, item} = useParams();
    const { data } = useContext(UserContext); 

    
    return (
        <div className="Item">
            <h1 style={{textAlign:"center", "padding" : "20px"}}>
                <Link to={`/menu`}>Menu</Link>{' '} / {' '} 
                <Link to={`/menu/${category}`}> {category} </Link>

            </h1>
            <div class="foodimage">
                <img src={data.menu[category][item].image}/>
            </div>
                         
            <div className="detailed-description">
            <h1><h3 class="detailed-title padded"> {item}</h3></h1> 
                <br/>  
                    <h2 >${data.menu[category][item].price}</h2>
                    <p>{data.menu[category][item].description}</p>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default DetailedItem;
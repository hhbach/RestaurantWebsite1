import React, { useEffect, useState, useContext } from 'react';
import './DetailedItem.css'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App.js';

import data from '../config.json';



const DetailedItem = (props) => {
    const { category, item} = useParams();
    const {  isEnglish, isLoading } = useContext(UserContext); 

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
                {isEnglish && <h1><h5 class="detailed-title padded"> {item}</h5></h1>  }
                {!isEnglish && <h1><h5 class="detailed-title padded"> {data.menu[category][item].altname}</h5></h1>  }
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
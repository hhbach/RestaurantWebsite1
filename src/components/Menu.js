import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem.js';
import yaml from 'js-yaml';
import './Menu.css'
import '../App.css'
import { useParams } from 'react-router-dom';
import MenuCategory from './MenuCategory.js';

const Menu = () => {

    const { category } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/config.yaml')
            .then(response => response.text())
            .then(text => {
                const doc = yaml.safeLoad(text);
                console.log(text)
                setData(doc);
            })
            .catch(error => console.error(error));
    }, []);

    //return <MenuItem key={index} title={item.title} description={item.description} price={item.price}></MenuItem>

    return (
        <div className="grid">
            
            {!category && data && data.menu.map((category, index) => {
                const categoryName = Object.keys(category)[0];
                return <MenuCategory key={index} category={categoryName} image={category.image}></MenuCategory>
            })}

            {category && data && data.menu.map((submenu, index) => {
                //if submenu key is equal to category
                if (Object.keys(submenu)[0] == category) {
                    return submenu["items"].map((item, index) => {
                        return <MenuItem key={index} title={item.title} description={item.description} price={item.price} image={item.image}></MenuItem>
                    })                    
                }                
            })}
        </div>
    );
}
export default Menu;

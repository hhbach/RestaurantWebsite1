import data from '../config.json';
import React, { useContext, useEffect, useState } from 'react';
import MenuItem from './MenuItem.js';
import './Menu.css'
import '../App.css'
import { useParams } from 'react-router-dom';
import MenuCategory from './MenuCategory.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../App.js';

const Menu = () => {
    const { category } = useParams();
    const { isEnglish } = useContext(UserContext); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Adjust this time as needed
    }, [category]);

    if (isLoading) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>{isEnglish ? "Loading Menu..." : "Đang tải thực đơn..."}</h2>
            </div>
        );
    }

    return (
        <div style={{ width: "100%" }}>
            {category && (
                <h1 style={{ textAlign: "center", padding: "20px" }}>
                    <Link to={`/menu`}>{isEnglish ? "Menu" : "Thực đơn"}</Link>{' '}
                    / <h3>{category}</h3>
                </h1>
            )}
            {!category && (
                <h1 style={{ textAlign: "center", padding: "20px" }}>
                    <h3>{isEnglish ? "Menu" : "Thực đơn"}</h3>
                </h1>
            )}

            <div className="grid">
                {!category && 
                    Object.keys(data.menu).map((key) => {
                        const submenu = data.menu[key];
                        const image = submenu.image;
                        const name2 = submenu.altname;
                        return <MenuCategory key={key} category={key} image={image} altname={name2} />
                    })
                }
                {category &&
                    Object.keys(data.menu[category]).map((item) => {
                        const menuItem = data.menu[category][item];
                        const image = menuItem.image;
                        const name2 = menuItem.altname;
                        if (item !== "image" && item !== "altname") {
                            return <MenuItem key={item} title={item} image={image} price={menuItem.price} description={menuItem.description} altname={name2} />
                        }
                        return null;
                    })
                }
            </div>
        </div>
    );
}

export default Menu;

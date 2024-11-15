import React, { useContext } from 'react';
import MenuItem from './MenuItem.js';
import './Menu.css'
import '../App.css'
import { useParams } from 'react-router-dom';
import MenuCategory from './MenuCategory.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../App.js';
import data from '../config.json';


const Menu = () => {

    const { category } = useParams();
    const { isEnglish } = useContext(UserContext); 

    return (
        <div style={{width: "100%"}}>

           {category && <h1 style={{textAlign:"center", "padding" : "20px"}}>
            <Link to={`/menu`}>{isEnglish && "Menu"} {!isEnglish && "Thực đơn"} </Link>{' '} / {' '}<h3>{category}</h3></h1>}
            
           {!category && <h1 style={{textAlign:"center", "padding" : "20px"}}>
            <h3> {isEnglish && "Menu"} {!isEnglish && "Thực đơn"}</h3></h1>}

            <div className="grid">
                
            {!category  && 
                Object.keys(data.menu).map((key, index) => {
                    const submenu = data.menu[key];
                    const image = submenu.image;
                    const name2 = submenu.altname;
                    return <MenuCategory category={key} image={image} altname={name2}/>
                })
            }
                
            {category  &&
            
                    Object.keys(data.menu[category]).map((item, index) => {
                        const menuItem = data.menu[category][item];
                        const image = menuItem.image;
                        const name2 = menuItem.altname;
                        if (item != "image" && item != "altname") {
                            return <MenuItem title={item} image={image} price={menuItem.price} description={menuItem.description} altname={name2}/>
                        }
                    }
                    )
            
            }

            </div>
        </div>

    );
}
export default Menu;
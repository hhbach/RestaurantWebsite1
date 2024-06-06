import React, { useContext } from 'react';
import MenuItem from './MenuItem.js';
import './Menu.css'
import '../App.css'
import { useParams } from 'react-router-dom';
import MenuCategory from './MenuCategory.js';
import { Link } from 'react-router-dom';
import { UserContext } from '../App.js';


const Menu = () => {

    const { category } = useParams();
    const { data } = useContext(UserContext); 

    return (
        <div style={{width: "100%"}}>

           {category && <h1 style={{textAlign:"center", "padding" : "20px"}}>
            <Link to={`/menu`}>Menu</Link>{' '} / {' '}<h3>{category}</h3></h1>}
           {!category && <h1 style={{textAlign:"center", "padding" : "20px"}}>
            <h3> Menu</h3></h1>}

            <div className="grid">
                
            {!category && data && 
                Object.keys(data.menu).map((key, index) => {
                    const submenu = data.menu[key];
                    const image = submenu.image;
                    return <MenuCategory category={key} image={image}/>
                })
            }
                
            {category && data &&
            
                    Object.keys(data.menu[category]).map((item, index) => {
                        const menuItem = data.menu[category][item];
                        const image = menuItem.image;
                        if (item != "image") {
                            return <MenuItem title={item} image={image} price={menuItem.price} description={menuItem.description}/>
                        }
                    }
                    )
            
            }

            </div>
        </div>

    );
}
export default Menu;
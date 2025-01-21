import React, { useState, useContext } from 'react';
import './MenuCategory.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../App.js';
import placeholderImage from '../placeHolder.png';

const MenuCategory = (props) => {
    const { isEnglish } = useContext(UserContext);

    // State for handling image loading
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="menu-item">
            <Link to={`/menu/${props.category}`}>
                <div className="foodimage">
                    {/* Placeholder image */}
                    {!imageLoaded && (
                        <img
                            src={placeholderImage} // Use the imported placeholder image
                            alt="Placeholder"
                            className="placeholder-image"
                        />
                    )}
                    {/* Actual image */}
                    <img
                        src={props.image}
                        alt={props.category}
                        loading="lazy"
                        className={`actual-image ${imageLoaded ? 'loaded' : ''}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
                <div className="item-title">
                    <h2 className="menu-item-title">
                        {!isEnglish && props.altname ? props.altname : props.category}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;

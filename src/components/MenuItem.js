import React, { useState, useContext } from 'react';
import './MenuItem.css';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App.js';
import placeholderImage from '../placeHolder.png';

const MenuItem = (props) => {
    const { category } = useParams();
    const { isEnglish } = useContext(UserContext);

    // State for handling image loading
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="menu-item">
            <Link to={`/menu/${category}/${props.title}`}>
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
                        alt={props.title}
                        loading="lazy"
                        className={`actual-image ${imageLoaded ? 'loaded' : ''}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
            </Link>
            <div className="item-title">
                <h3 className="menu-item-title">{!isEnglish && props.altname ? props.altname : props.title}</h3>
                <p className="menu-item-price">
                    <h4>${props.price}</h4>
                </p>
            </div>
            <br />
            <p className="menu-item-description">{props.description}</p>
        </div>
    );
};

export default MenuItem;
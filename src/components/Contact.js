import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import './Contact.css'

const Contact = () => {

    const [data, setData] = useState(null);

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <h2>Address</h2>
            <p><a href="https://maps.app.goo.gl/UFwkJntV7Qk5vVbZA">4055 S Arizona STE 8 <br/> Chandler, AZ 85248</a></p>
            <br/>
            <br/>
            <h2>Phone</h2>
            <p><a href="tel:(480)895-9090">(480)895-9090</a></p>

            <br/>
            <h2>Opening Hours</h2>
            <p>Monday: 11AM - 8PM</p>
            <p>Tuesday: 11AM - 8PM</p>
            <p>Wednesday: 11AM - 8PM</p>
            <p>Thursday: 11AM - 8PM</p>
            <p>Friday: 11AM - 8PM</p>
            <p>Saturday: 11AM - 8PM</p>
            <p>Sunday: 11AM - 8PM</p>

            <br/>
            <p>For any inquiries, please contact us at:</p>
            <p>Email: <a href="mailto:t.huynh1987@gmail.com">t.huynh1987@gmail.com</a></p>
        </div>
    );
}
export default Contact;
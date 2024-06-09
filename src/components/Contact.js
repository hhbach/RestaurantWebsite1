import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import './Contact.css'

const Contact = () => {

    const [data, setData] = useState(null);

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <h2>Address</h2>
            <p><a href="https://www.google.com/maps/place/Pho+Chandler/@33.2464586,-111.8389869,17z/data=!3m1!4b1!4m6!3m5!1s0x872baabb883b3efd:0xd058d2210af74ddc!8m2!3d33.2464586!4d-111.8389869!16s%2Fg%2F1wc31qg9?entry=ttu">4055 S Arizona STE 8 <br/> Chandler, AZ 85248</a></p>
            <br/>
            <br/>
            <h2>Phone</h2>
            <p><a href="tel:(480)274-7255">(480)274-7255</a></p>

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
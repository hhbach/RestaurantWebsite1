import React, { useEffect, useState } from 'react';
import yaml from 'js-yaml';
import './Menu.css'
import '../App.css'

const Contact = () => {

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

    //return <ContactItem key={index} title={item.title} description={item.description} price={item.price}></ContactItem>

    return (
        <div>
            hello world
        </div>
    );
}
export default Contact;

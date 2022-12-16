import React from 'react'
import data from '../data/footerData'

import './Footer.css';

function Footer() {
    const link = data.map(item => {
        return(
            <a key={item.name} href={item.path}> {item.name}</a>
        );
    });
    return ( 
        <footer className="footer">
                {link}
        </footer>
     );
}

export default Footer;
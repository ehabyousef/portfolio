import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='contain footer'>
            <div className="foot_content">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Users</a></li>
                </ul>
                <p><span>&copy;</span> 2023 Ehab Yousef.All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import './Header.css'
const Header = () => {
    const [popShow, setpopShow] = useState(false)

    return (
        <header>
            <div className='popup'> <button onClick={() => setpopShow(true)}><i className="fa-solid fa-bars"></i></button></div>
            <nav>
                <ul className='appmenu'>
                    <li><a href="">About</a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button className='darkbtn'><i className="fa-regular fa-moon moon"></i></button>
            {popShow ?
                <div className="popmenu">
                    <ul>
                        <li>
                            <button onClick={() => setpopShow(false)}><i className="fa-solid fa-xmark"></i></button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Article</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div> : ''}
        </header>
    );
};

export default Header;
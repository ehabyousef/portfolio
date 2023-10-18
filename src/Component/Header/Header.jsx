import React, { useEffect, useState } from 'react';
import './Header.css'
const Header = () => {
    const [popShow, setpopShow] = useState(false)
    const [mode, setmode] = useState(localStorage.getItem('currentMode') ?? 'dark')
    useEffect(() => {
        if (mode === 'light') {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        } else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [mode])
    console.log(mode);
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
            <button onClick={() => {
                localStorage.setItem('currentMode', mode === 'dark' ? "light" : "dark");
                setmode(localStorage.getItem('currentMode'))
            }} className='darkbtn'>{mode == 'dark' ? (<i className="fa-regular fa-moon moon"></i>) : (<i className="fa-regular fa-sun"></i>)}</button>
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
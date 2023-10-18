import React from 'react';
import "./Main.css"
import { useState } from 'react'
const Main = () => {
    const [setActive, setsetActive] = useState('all');
    return (
        <div className='contain portfolio'>
            <div className="right_main">
                <button onClick={() => setsetActive('all')} className={setActive === "all" ? 'active' : null}>All Projects</button>
                <button onClick={() => setsetActive('html')} className={setActive === "html" ? 'active' : null}>Html & Css</button>
                <button onClick={() => setsetActive('js')} className={setActive === "js" ? 'active' : null}>Javascript</button>
                <button onClick={() => setsetActive('react')} className={setActive === "react" ? 'active' : null}>React</button>
                <button onClick={() => setsetActive('team')} className={setActive === "team" ? 'active' : null}>Team Work</button>
            </div>
            <div className="left_main">
                <div className="card">
                    <img src="image.jpg" alt="" width='250px' />
                    <div className="content" style={{ width: '250px' }}>
                        <h1 className='tilte'>Portfolio</h1>
                        <p className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nostrum.</p>
                        <div className="icon">
                            <div className="marks">
                                <i className="fa-solid fa-link"></i>
                                <i className="fa-brands fa-github"></i>
                            </div>
                            <a href="/">More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;
import React from 'react';
import "./Main.css"
const Main = () => {
    return (
        <div className='contain portfolio'>
            <div className="right_main">
                <button className='active'>All Projects</button>
                <button>Html & Css</button>
                <button >Javascript</button>
                <button>React</button>
                <button>Team Work</button>
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
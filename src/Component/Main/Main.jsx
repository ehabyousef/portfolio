import React, { useEffect } from 'react';
import "./Main.css"
import { useState } from 'react'
import axios from 'axios';
const Main = () => {
    const [setActive, setsetActive] = useState('all');
    const [prodjectData, setprodjectData] = useState([])

    const getProject = () => {
        axios
            .get("http://localhost:3030/results")
            .then((res) => setprodjectData(res.data))
            .catch((err) => console.log(err));
    };
    const handleEvent = (x) => {
        setsetActive(x);
        const filtered = prodjectData.filter((item) => {
            const wanted = item.category.filter((myItem) => {
                return myItem === x;
            });
            return wanted[0] === x;
        });
        setprodjectData(filtered);
        console.log(x);
    }
    useEffect(() => {
        getProject();
    }, []);
    return (
        <div className='contain portfolio'>
            <div className="right_main">
                <button onClick={() => handleEvent('all')} className={setActive === "all" ? 'active' : null}>All Projects</button>
                <button onClick={() => handleEvent('html')} className={setActive === "html" ? 'active' : null}>Html & Css</button>
                <button onClick={() => handleEvent('js')} className={setActive === "js" ? 'active' : null}>Javascript</button>
                <button onClick={() => handleEvent('react')} className={setActive === "react" ? 'active' : null}>React</button>
                <button onClick={() => handleEvent('team')} className={setActive === "team" ? 'active' : null}>Team Work</button>
            </div>
            <div className="left_main">
                {prodjectData.map((x, ind) => {
                    return (
                        <div className="card" key={ind}>
                            <img src="image.jpg" alt="" width='250px' />
                            <div className="content" style={{ width: '250px' }}>
                                <h1 className='tilte'>{x.title}</h1>
                                <p className="subtitle">{x.description}</p>
                                <div className="icon">
                                    <div className="marks">
                                        <i className="fa-solid fa-link"></i>
                                        <i className="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;
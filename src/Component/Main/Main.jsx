import React, { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';

const Main = () => {
    const [active, setActive] = useState('all');
    const [projectData, setProjectData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const getProject = () => {
        axios
            .get('http://localhost:3030/results')
            .then((res) => {
                setProjectData(res.data);
                setFilteredData(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleEvent = (category) => {
        setActive(category);

        if (category === 'all') {
            setFilteredData(projectData);
        } else {
            const filtered = projectData.filter((item) =>
                item.category.includes(category)
            );
            setFilteredData(filtered);
        }
    };

    useEffect(() => {
        getProject();
    }, []);

    return (
        <div className="contain portfolio">
            <div className="right_main">
                <button
                    onClick={() => handleEvent('all')}
                    className={active === 'all' ? 'active' : null}
                >
                    All Projects
                </button>
                <button
                    onClick={() => handleEvent('css')}
                    className={active === 'css' ? 'active' : null}
                >
                    Html & Css
                </button>
                <button
                    onClick={() => handleEvent('js')}
                    className={active === 'js' ? 'active' : null}
                >
                    Javascript
                </button>
                <button
                    onClick={() => handleEvent('React')}
                    className={active === 'React' ? 'active' : null}
                >
                    React
                </button>
                <button
                    onClick={() => handleEvent('team')}
                    className={active === 'team' ? 'active' : null}
                >
                    Team Work
                </button>
            </div>
            <div className="left_main">
                {filteredData.map((x, ind) => (
                    <div className="card" key={ind}>
                        <img src="image.jpg" alt="" width="250px" />
                        <div className="content" style={{ width: '250px' }}>
                            <h1 className="tilte">{x.title}</h1>
                            <p className="subtitle">{x.description}</p>
                            <div className="icon">
                                <div className="marks">
                                    <i className="fa-solid fa-link"></i>
                                    <i className="fa-brands fa-github"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
import React from "react";
import "./Avatar.css";
import Lottie from "lottie-react";
import laptop from '../../../public/laptop.json';
const Avatar = () => {
    return (
        <div className="contain avatar">
            <div className="right">
                <img src="circle.png" alt="" width="100px" />
                <div className="text">
                    <h1>Software Developer, Designer and compotitive programmer</h1>
                    <p>
                        I’m Ehab, a software designer and entrepreneur based in Cairo,
                        Egypt. I’m the Developer and Designer who develop
                        technologies that empower regular people to explore space on their
                        own terms.
                    </p>
                </div>
                <div className="icons">
                    <a href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div className="left">
                <Lottie style={{ height: '60rem' }} animationData={laptop} />
            </div>
        </div>
    );
};

export default Avatar;

import React from "react";
import "./Avatar.css";
import Lottie from "lottie-react";
import dark from '../../../public/laptop_dark.json';
import { motion } from "framer-motion"
const Avatar = () => {
    return (
        <div className="contain avatar">
            <div className="right">
                <img src="circle.png" alt="" width="100px" />
                <div className="text">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >Software Developer, Designer and compotitive programmer</motion.h1>
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

                <Lottie style={{ height: '40rem' }} animationData={dark} />
            </div>
        </div>
    );
};

export default Avatar;

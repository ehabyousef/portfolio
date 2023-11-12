import React from "react";
import "./Avatar.css";
import Lottie from "lottie-react";
import dark from "../../../public/laptop_dark.json";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Avatar = () => {
    return (
        <div className="contain avatar">
            <div className="right">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    src="circle.png"
                    alt=""
                    width="130px"
                />
                <div className="text">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Developer",
                                    "Designer",
                                    "Competitive Programmer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                                delay: 100,
                            }}
                        />
                    </motion.h1>
                    <p>
                        I’m Ehab, a software designer and entrepreneur based in Cairo,
                        Egypt. I’m the Developer and Designer who develop technologies that
                        empower regular people to explore space on their own terms.
                    </p>
                </div>
                <div className="icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100080623690922"
                        target="blank"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/ehab.yousef.66/?utm_source=qr&igshid=MThlNWY1MzQwNA%3D%3D"
                        target="blank"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/ehabyousef" target="blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ehabyousef/" target="blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div className="left">
                <Lottie style={{ height: "40rem" }} animationData={dark} />
            </div>
        </div>
    );
};

export default Avatar;

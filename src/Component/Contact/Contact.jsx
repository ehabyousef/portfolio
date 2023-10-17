import React from "react";
import "./Contact.css"
const Contact = () => {
    return (
        <div className="contain cont_main">
            <div className="contact">
                <span>
                    <i className="fa-solid fa-paper-plane"></i><b>Contact Me</b>
                </span>
                <p>
                    contact us for more infomation and get notified when i puplish something new
                </p>
            </div>
            <div className="box">
                <div className="form">
                    <div className="first">
                        <label htmlFor="email">Email Adress</label>
                        <input type="email" name='' id="email" required />
                    </div>
                    <div className="sec">
                        <label htmlFor="message">Your Message </label>
                        <textarea name="" id="message" required></textarea>
                    </div>
                    <button type="submit">submit</button>
                </div>
                <div className="anim">
                    <img src="circle.png" alt="" width={150} />
                </div>
            </div>
        </div>
    );
};

export default Contact;

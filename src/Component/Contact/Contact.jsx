import React, { useEffect, useState } from "react";
import "./Contact.css";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/done.json";
import contact_light from '../../../public/contact_light.json';
const Contact = () => {
    const [state, handleSubmit] = useForm("xleyakko");
    const [showmessage, setshowmessage] = useState(false);
    useEffect(() => {
        if (state.succeeded) {
            setshowmessage(true);
            setTimeout(() => {
                setshowmessage(false);
            }, 4000);
        }
    }, [state.succeeded]);

    return (
        <div className="contain cont_main">
            <div className="contact">
                <span>
                    <i className="fa-solid fa-paper-plane"></i>
                    <b>Contact Me</b>
                </span>
                <p>
                    contact us for more infomation and get notified when i puplish
                    something new
                </p>
            </div>
            <div className="box">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="first">
                        <label htmlFor="email">Email Adress</label>
                        <input type="email" name="email" id="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="sec">
                        <label htmlFor="message">Your Message </label>
                        <textarea name="message" id="message" required></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? (
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        ) : (
                            "submit"
                        )}
                    </button>

                    {showmessage && (
                        <p style={{ fontSize: "25px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Lottie loop={false} style={{ height: '60px' }} animationData={doneAnimation} />
                            Thanks for joining!💖🖤
                        </p>
                    )}
                </form>
                <div className="anim">
                    <Lottie className="contant_light" style={{ height: '25rem' }} animationData={contact_light} />
                </div>
            </div>
        </div>
    );
};

export default Contact;

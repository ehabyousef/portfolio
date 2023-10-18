import React, { useEffect, useState } from "react";
import "./Contact.css"
import { ValidationError, useForm } from "@formspree/react";
const Contact = () => {
    const [state, handleSubmit] = useForm("xleyakko");
    const [showmessage, setshowmessage] = useState(false)
    useEffect(() => {
        if (state.succeeded) {
            setshowmessage(true)
        } else {
            setshowmessage(false)
        }
    }, [state.succeeded])


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
                <form className="form" onSubmit={handleSubmit}>
                    <div className="first">
                        <label htmlFor="email">Email Adress</label>
                        <input type="email" name='email' id="email" required />
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
                    <button type="submit" disabled={state.submitting} >
                        {state.submitting ? <div className="lds-ring"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : 'submit'}
                    </button>
                    {state.succeeded && (<p style={{ fontSize: '25px' }}>Thanks for joining!💖🖤</p>)}
                </form>
                <div className="anim">
                    <img src="circle.png" alt="" width={150} />
                </div>
            </div>
        </div>
    );
};

export default Contact;

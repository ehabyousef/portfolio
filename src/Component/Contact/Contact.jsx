import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { ValidationError, useForm } from "@formspree/react";
import { send } from "vite";
const Contact = () => {
    // const [state, handleSubmit] = useForm("xleyakko");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5svhzrs', 'template_ipa83db', form.current, 'SgnpLsqpfTrEiqgFC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
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
                <form ref={form} className="form" onSubmit={sendEmail}>
                    <div className="first">
                        <label htmlFor="email">Email Adress</label>
                        <input type="email" name='user_email' id="email" required />
                        {/* <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        /> */}
                    </div>
                    <div className="sec">
                        <label htmlFor="message">Your Message </label>
                        <textarea name="message" id="message" required></textarea>
                        {/* <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        /> */}
                    </div>
                    <button type="submit" value={send} >{state.submitting ? <i className="fas fa-spinner fa-spin"></i> : 'submit'} <span>{state.succeeded ? <p>Thanks for joining!💖🖤</p> : ''}</span></button>
                </form>
                <div className="anim">
                    <img src="circle.png" alt="" width={150} />
                </div>
            </div>
        </div>
    );
};

export default Contact;

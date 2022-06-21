import React from 'react';
import { useCallback, useState, useEffect } from 'react';
import './AboutPage.css'


export default function AboutPage() {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        console.log(mail);
        console.log(name);
        console.log(message);
    }
    const onChangeMail = (e) => {
        const mail = e.target.value;
        setMail(mail);
    };
    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const onChangeMessage = (e) => {
        const message = e.target.value;
        setMessage(message);
    };
    return(
        <div>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>uisque id maximus leo. Quisque faucibus libero sit amet enim elementum, a pretium ex congue.</p>
            </div>
            <div className="more-section">
            <div className="contact-section">
                <h1>Contact</h1>
                <h3>Hotline</h3>
                <p>333 666 999</p>
                <h3>E-mail</h3>
                <p>przykladowy@gmail.com</p>
                <h3>Office</h3>
                <p> 123 456 789 or test@gmail.com</p>
                <h3>Technical issues</h3>
                <p>111 222 333 or 444 555 666</p>
            </div>
            <div className="mail-section">
                <form onSubmit={submitHandler}>
                        <label>E-mail</label>
                        <input name="Mail" id="Mail" type="email" value={mail}
                            onChange={onChangeMail} />
                        <label>Name</label>
                        <input name="Name" id="Name" value={name}
                            onChange={onChangeName} />
                        <label>Message</label>
                        <textarea maxLength="255" name="Message" id="Message" value={message}
                            onChange={onChangeMessage} />
                    <input value="Send" type="submit"/>
                    </form>
                </div>
                </div>
        </div>
    )
}

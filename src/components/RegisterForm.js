import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import AuthService from "../services/auth.service";

export default function RegisterForm() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };


    const submitHandler = e => {
        e.preventDefault();


        AuthService.register(username, email, password).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    }

    return (
        <div className="user-container">
            <h3 className='user-profile'>Register</h3>
            <form onSubmit={submitHandler} className="form">
                <div className="form-inner">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={onChangeUsername} value={username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={onChangeEmail} value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="passworc" id="password" onChange={onChangePassword} value={password}/>
                    </div>
                    <input className="form-submit" type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}
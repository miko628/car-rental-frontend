import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom"
import AuthService from "../services/auth.service";

export default function LoginForm() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const form = useRef();
    const checkBtn = useRef();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const submitHandler = e => {
        e.preventDefault();


        setMessage("");
        setLoading(true);


        console.log(username);
        console.log(password);


        AuthService.login(username, password).then(
            () => {
                navigate("/home");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (

        <div>
            <form onSubmit={submitHandler} ref={form}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {/* ERROR! */}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={username} onChange={onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="passworc" id="password" value={password}
                               onChange={onChangePassword}/>
                    </div>
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}
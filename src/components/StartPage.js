import React from 'react';
import {useNavigate} from "react-router-dom"

export default function StartPage() {
    let navigate = useNavigate();
    return (
        <div>
            {/*<div>*/}
            {/*    <h1>*/}
            {/*        Start page*/}
            {/*    </h1>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={() => navigate("/login")}>Login</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={() => navigate("/register")}>Register</button>*/}
            {/*</div>*/}
        </div>
    )
}
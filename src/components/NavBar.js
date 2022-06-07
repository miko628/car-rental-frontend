import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"

export default function Navbar( { Logout, user } ) {
    let navigate = useNavigate();

    const logoutHandler = e => {
        e.preventDefault();

        Logout();
    }

    return (
        <nav className="nav">
            <a className="site-title" onClick={() => navigate("/home")}>Car rental</a>
            <ul>
                <li>
                    <a onClick={() => navigate("/about")}>About</a>
                </li>
                <li>
                    <a onClick={() => navigate("/pricing")}>Pricing</a>
                </li>          
                <li>
                    <a onClick={logoutHandler}>Logout</a>
                </li>    
            </ul>
        </nav>
    )
}
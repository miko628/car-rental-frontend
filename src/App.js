//import logo from './logo.svg';
//import './App.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom"
import StartPage from './components/StartPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';

//test user
const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
}
const accessToken = ''
const apiUrl = 'http://localhost:8080'

const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})

export default function App() {
    const [user, setUser] = useState({name: "", email: ""})
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    const Register = details => {
        console.log(details);
        console.log("Registered in!");
    }

    const Login = details => {
        console.log(details);
        var email = details.email;
        var password = details.password;

        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in!");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log("Login details do not match!")
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", email: ""});
    }

    return (
        // (user.email != "") ? (
        //     //<div className="welcome">
        //         //<h2>Welcome, <span>{user.name}</span></h2>
        //         //<button>Logout</button>
        //     //</div>
        //     //<Home Logout={Logout} user={user} />
        //     <Router>
        //         <NavBar Logout={Logout} user={user} />
        //         <Routes>
        //             <Route path="/" element={<StartPage />} />
        //             <Route path="/login" element={<LoginForm Login={Login} error={error} />} />
        //             <Route path="/register" element={<RegisterPage Register={Register} error={error} />} />
        //             <Route path="/home" element={<HomePage Logout={Logout} user={user} />} />
        //             <Route path="/pricing" element={<PricingPage />} />
        //             <Route path="/about" element={<AboutPage />} />
                    
        //         </Routes>
        //     </Router>
        // ) : (
        //     <LoginForm Login={Login} error={error} />
        // )
        <Router>
            <NavBar Logout={Logout} user={user} />
            <Routes>
                <Route exact path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginForm Login={Login} error={error} />} />
                <Route path="/register" element={<RegisterForm Register={Register} error={error} />} />
                <Route path="/home" element={<HomePage Logout={Logout} user={user} />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                
            </Routes>
        </Router>
    )
}
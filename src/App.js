// zainstalowac npm install react-router-dom@6

//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {

    //test user
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

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
        //<div className="App">
            (user.email != "") ? (
                //<div className="welcome">
                    //<h2>Welcome, <span>{user.name}</span></h2>
                    //<button>Logout</button>
                //</div>
                //<Home Logout={Logout} user={user} />
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage Logout={Logout} user={user} />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        

                    </Routes>
                </Router>
            ) : (
                <LoginForm Login={Login} error={error} />
                // <Router>
                //     <Route path="/" element={<Login Login={Login} error={error} />} />
                // </Router>
            )
        //</div>
    )
}

export default App;

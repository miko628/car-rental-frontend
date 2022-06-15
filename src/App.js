import React, {useEffect, useState} from 'react';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import StartPage from './components/StartPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserPage from './components/UserPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import PricingPage from './components/PricingPage';
import AboutPage from './components/AboutPage';
import RentForm from './components/RentForm';
import CarInfo from './components/CarInfo';
import AuthService from "./services/auth.service";
import "./components/styles.css"



export default function App() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [showroom, setShowroom] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logoutHandler = () => {
        AuthService.logout();
        // setShowModeratorBoard(false);
        // setShowAdminBoard(false);
        // setCurrentUser(undefined);
    };

    return (
        <div>
            {/*<nav className="nav">*/}
            {/*    <a className="site-title" onClick={() => ("/home")}>Car rental</a>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <a onClick={() => navigate("/about")}>About</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a onClick={() => navigate("/pricing")}>Pricing</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a onClick={logoutHandler}>Logout</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <nav className="nav">
                <Link to={"/"} className="site-title">
                    Car rental
                </Link>
                <ul>
                    <li>
                        <Link to={"/home"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/search"} className="nav-link">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="nav-link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/pricing"} className="nav-link">
                            Pricing
                        </Link>
                    </li>

                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )}

                    {/* {currentUser && (
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                User
                            </Link>
                        </li>
                    )} */}
                </ul>

                <ul>
                    {currentUser ? (
                        <div>
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logoutHandler}>
                                    Logout
                                </a>
                            </li>
                        </div>
                    ) : (
                        <ul>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    )}
                </ul>
            </nav>
            {/* <a>Welcome, 
                    <span>
                        {currentUser.username}
                    </span>
            </a> */}

            <Routes>
                <Route exact path="/" element={<StartPage/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
                <Route path="/user" element={<UserPage/>}/>
                <Route path="/rent" element={<RentForm/>}/>
                <Route path="/info" element={<CarInfo/>}/>
            </Routes>
        </div>
    )
}
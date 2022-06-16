import React, {useEffect, useState} from 'react';
import RentForm from './RentForm';
import FindForm from './FindForm';
import AuthService from '../services/auth.service';
import "./UserPage.css"

export default function UserPage() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentEmail, setCurrentEmail] = useState("")
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user)
            setCurrentUsername(user.username)
            setUsername(user.username)
            setCurrentEmail(user.email)
            setEmail(user.email)
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);


    const submitProfileHandler = e => {
        e.preventDefault();


        setMessage("");
        setLoading(true);

        console.log(currentUsername);
        console.log(username);
        console.log(email);
        console.log(password);


        AuthService.updateProfile(currentUsername, username, email, password).then(
            () => {
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
    }

    const submitPasswordHandler = e => {
        e.preventDefault();


        setMessage("");
        setLoading(true);

        console.log(currentUsername);
        console.log(username);
        console.log(password);


        AuthService.updatePassword(currentUsername, currentPassword, newPassword).then(
            () => {
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
    }


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
        // console.log(username)
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        // console.log(email)
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeCurrentPassword = (e) => {
        const currentPassword = e.target.value;
        setCurrentPassword(currentPassword);
        console.log(currentPassword)
    };

    const onChangeNewPassword = (e) => {
        const newPassword = e.target.value;
        setNewPassword(newPassword);
        console.log(newPassword)
    };

    return (
        <div className="user-container">
            <div>
            <h3 className='user-profile'>User profile</h3>
            <form onSubmit={submitProfileHandler} className="form">
                <div className="form-inner">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={username} /*defaultValue={currentUsername}*/
                            onChange={onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={email}  /*defaultValue={currentEmail}*/
                            onChange={onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={password}
                            onChange={onChangePassword} onBlur={onChangePassword}/>
                    </div>
                    <input className="form-submit" type="submit" value="Update profile"/>
                </div>
            </form>
            <form onSubmit={submitPasswordHandler} className="form">
                <div className="form-inner">
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current password:</label>
                        <input type="password" name="currentPassword" id="currentPassword" value={currentPassword}
                            onChange={onChangeCurrentPassword}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New password:</label>
                        <input type="password" name="newPassword" id="newPassword" value={newPassword}
                            onChange={onChangeNewPassword}/>
                    </div>
                    <input className="form-submit" type="submit" value="Update password"/>
                </div>
            </form>
            </div>
        </div>
    )
}
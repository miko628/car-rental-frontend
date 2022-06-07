import React, { useState } from 'react';
import NavBar from './NavBar2';

export default function HomePage( { Logout, user } ) {

    const logoutHandler = e => {
        e.preventDefault();

        Logout();
    }

    return (
        <div className="Home">  
            <div style={{ display: "flex" }}>  
                <div className="welcome" style={{ marginLeft: "auto" }}>
                    <label>Welcome, <span>{user.email}</span></label>
                    <button onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </div>
    )
}

//<h1> {userEmail} </h1>

/* <div className="welcome">
<label>Welcome, <span>{userEmail}</span></label>
<button>Logout</button>
</div> */

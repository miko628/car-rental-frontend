import React, { useState } from 'react';
import NavBar from './NavBar2';

export default function HomePage( { Logout, user } ) {
    return (
        <div className="Home">  
            <div className="welcome">
                <a>Welcome, <span>{user.email}</span></a>
            </div>
        </div>
    )
}

//<h1> {userEmail} </h1>

/* <div className="welcome">
<label>Welcome, <span>{userEmail}</span></label>
<button>Logout</button>
</div> */

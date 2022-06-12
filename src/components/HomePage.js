import React, {useEffect, useState} from 'react';

export default function HomePage({currentUser}) {
    // const [currentUser, setCurrentUser] = useState(undefined);

    return (
        <div className="Home">
            <div className="welcome">
                <a>Welcome, <span>{currentUser.username}</span></a>
            </div>
        </div>
    )
}

//<h1> {userEmail} </h1>

/* <div className="welcome">
<label>Welcome, <span>{userEmail}</span></label>
<button>Logout</button>
</div> */

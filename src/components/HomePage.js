import React, { useState } from 'react'
import NavBar from './components/NavBar'

function HomePage(userEmail) {
    return (
        <div className="Home">
            <NavBar />
        </div>
    )
}

export default HomePage

//<h1> {userEmail} </h1>
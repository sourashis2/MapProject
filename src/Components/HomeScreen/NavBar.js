import React from 'react'
import './HomeScreen.css';

function NavBar() {
    return (
            <div className="navbar">
                <div className="left">
                    <h2>Go</h2>
                    <ul>
                        <li>Ride</li>
                        <li>Package</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>My trips</li>
                    </ul>
                </div>
            </div>
           
    )
}

export default NavBar
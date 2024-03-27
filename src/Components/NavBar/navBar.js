import React, { useState } from 'react';
import './navBar.css';
import dayIcon from '../../Assets/light_mode.png';
import nightIcon from '../../Assets/dark_mode.png';

function NavBar() {
    const [isNightMode, setIsNightMode] = useState(false);

    const toggleMode = () => {
        setIsNightMode(!isNightMode);
    };

    return (
        <div className={`navbar ${isNightMode ? 'night-mode' : ''}`}>
            <div className="left">
                <h2>Go</h2>
                <ul className='navOptions'>
                    <li>Drive</li>
                    <li>Ride</li>
                    <li>abcd</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
                <img src={isNightMode ? dayIcon : nightIcon} alt={isNightMode ? 'night' : 'day'} onClick={toggleMode} className='dayNight'/>
            </div>
            <div className="right">
                <ul>
                    <li className='mytrips'>My Trips</li>                        
                </ul>
            </div>
        </div>
    );
}

export default NavBar;

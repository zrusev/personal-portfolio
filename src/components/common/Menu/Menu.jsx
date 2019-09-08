import React from 'react';
import './menu.css';

export default () => {
    return (
        <nav>
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Portfolio</li></a>
                    <a href="#"><li>Experience</li></a>
                    <a href="#"><li>Education</li></a>
                </ul>
            </div>
        </nav>
    )
}
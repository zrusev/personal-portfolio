import React from 'react';
import './hamburger.css';
// import attachToButton from '../../../scripts/about/hamburger';

export default () => {
    return (
        <div className="hamburger">
            <button className="btn-toggle" id="menu-toggle">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </div>
    )
}
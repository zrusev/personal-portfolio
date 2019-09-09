import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default () => {
    return (
        <div className="navigation navigation-left">
            <Link to="/experience">
                <span>about</span>
                <em></em>
            </Link> 
        </div>
    )
}
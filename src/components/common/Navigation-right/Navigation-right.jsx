import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default () => {
    return (
        <div className="navigation navigation-right">
            <Link to="/education">
                <span>contacts</span>
                <em></em>
            </Link>
        </div>
    )
}
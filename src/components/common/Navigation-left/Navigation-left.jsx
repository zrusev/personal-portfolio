import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

export default (props) => {
    return (
        <div className="navigation navigation-left">
            <Link to={`/${props.direction}`}>
                <span>{props.direction}</span>
                <em></em>
            </Link> 
        </div>
    )
}
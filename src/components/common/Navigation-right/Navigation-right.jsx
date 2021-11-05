import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navigation.scss';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default (props) => {
    let history = useHistory();

    return (
        <div className="navigation navigation-right">
            <KeyboardEventHandler
                handleKeys={['right']}
                onKeyEvent={(key, e) => history.push(`/${props.direction}`)} />
            <Link to={`/${props.direction}`}>
                <span>{props.direction}</span>
                <em></em>
            </Link>
        </div>
    )
}
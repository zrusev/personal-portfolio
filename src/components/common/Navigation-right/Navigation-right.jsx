import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navigation.scss';
import KeyboardEventHandler from 'react-keyboard-event-handler';

export default (props) => {
    let history = useHistory();

    const [flag, setFlag] = useState(false);

    const timeoutID = () => window.setTimeout(() => {
        history.push(`/${props.direction}`);
    }, 500);

    useEffect(() => {
        return () => window.clearTimeout(timeoutID);
    }, [])

    return (
        <div
            className={"navigation navigation-right" + (flag ? ' flag': '')}
            title='Use right arrow key to navigate'
        >
            <KeyboardEventHandler
                handleKeys={['right']}
                onKeyEvent={(key, e) => {
                    setFlag(true);
                    timeoutID();
                }} />
            <Link to={`/${props.direction}`}>
                <span>{props.direction}</span>
                <em></em>
            </Link>
        </div>
    )
}
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
        <div className={"navigation navigation-left" + (flag ? ' flag': '')}>
            <KeyboardEventHandler
                handleKeys={['left']}
                onKeyEvent={(key, e) => {
                    setFlag(true);
                    timeoutID();
                }} />
            <Link to={`/${props.direction}`}>
                <span title='Use left arrow key to navigate'>{props.direction}</span>
                <em></em>
            </Link>
        </div>
    )
}
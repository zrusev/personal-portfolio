import React, { useState, useEffect } from 'react';
import { MenuConsumer } from '../../contexts/MenuContext';
import { CSSTransition } from 'react-transition-group';
import './hamburger.scss';

function HamburgerComponent(props) {
    const [showMenu, setshowMenu] = useState(props.isClosed);
    
    useEffect(() => {
        setshowMenu(props.isClosed);
    });

    const handleClickEvent = () => {
        props.updateMenuState({
            isClosed: showMenu,
            isChecked: !props.isChecked
        });
    }

    return (
        <div className="hamburger">
            <CSSTransition
                in={showMenu}
                timeout={100}
                classNames={'animate'}
            >
                <button id="menu-toggle"
                        className='btn-toggle'
                        onClick={() => {
                            setshowMenu(!showMenu);
                            handleClickEvent();
                        }}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </CSSTransition>
        </div>
    )
}

export default () => {
    return (
        <MenuConsumer>
            {
                ({isClosed, isChecked, updateMenuState}) => (
                    <HamburgerComponent
                        isClosed={isClosed}
                        isChecked={isChecked}
                        updateMenuState={updateMenuState}
                    />
                )
            }
        </MenuConsumer>
    )
}
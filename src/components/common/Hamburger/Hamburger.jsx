import React, { Component } from 'react';
import { MenuConsumer } from '../../contexts/MenuContext';
import './hamburger.css';

class HamburgerComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClickEvent = this.handleClickEvent.bind(this); 
    }

    handleClickEvent() {
        const { buttonState, isChecked } = this.props;

        this.props.updateMenuState({
            buttonState: buttonState === 'close'
                ? 'open'
                : 'close',
            isChecked: !isChecked
        });
    }

    render() {
        const { buttonState } = this.props;

        return (
            <div className="hamburger">
                <button className={'btn-toggle ' + buttonState}
                        id="menu-toggle"
                        onClick={this.handleClickEvent}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>
        )
    }
}

export default class HamburgerComponentWithContext extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuConsumer>
                {
                    ({buttonState, isChecked, updateMenuState}) => (
                        <HamburgerComponent
                            buttonState={buttonState}
                            isChecked={isChecked}
                            updateMenuState={updateMenuState}
                        />
                    )
                }
            </MenuConsumer>
        )
    }
}
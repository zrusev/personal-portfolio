import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuConsumer, defaultMenuState } from '../../contexts/MenuContext';
import './menu.scss';

class MenuComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: this.props.isChecked
        }
    }

    componentDidUpdate(prevState) {        
        if (this.props.isChecked !== prevState.isChecked) {
            this.setState({
                isChecked: this.props.isChecked
            });
        }
    }

    handleClickEvent = () => {
        this.props.updateMenuState(defaultMenuState);
    }

    render() {
        return (
            <nav>
                <div id="menuToggle">
                    <input type="checkbox"
                        checked={this.state.isChecked}
                        onChange={() => {}}
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <Link to="/about" onClick={this.handleClickEvent}><li>About</li></Link>
                        <Link to="/portfolio" onClick={this.handleClickEvent}><li>Portfolio</li></Link>
                        <Link to="/experience" onClick={this.handleClickEvent}><li>Experience</li></Link>
                        <Link to="/education" onClick={this.handleClickEvent}><li>Education</li></Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default (props) => {    
    return (
        <MenuConsumer>
            {
                ({isChecked, updateMenuState}) => (
                    <MenuComponent
                        isChecked={isChecked}
                        updateMenuState={updateMenuState}
                    />
                )
            }
        </MenuConsumer>
    )
}
import React, { Component } from 'react';
import { MenuConsumer } from '../../contexts/MenuContext';
import './menu.css';

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
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Portfolio</li></a>
                        <a href="#"><li>Experience</li></a>
                        <a href="#"><li>Education</li></a>
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
                ({isChecked}) => (
                    <MenuComponent
                        {...props}
                        isChecked={isChecked}
                    />
                )
            }
        </MenuConsumer>
    )
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuConsumer } from '../../contexts/MenuContext';
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
                        <Link to="/about"><li>Home</li></Link>
                        <Link to="/portfolio"><li>Portfolio</li></Link>
                        <Link to="/experience"><li>Experience</li></Link>
                        <Link to="/education"><li>Education</li></Link>
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
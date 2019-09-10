import React, { Component } from 'react';
import './about.css';

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasBeenAnimated: false
        }
    }
    
    componentDidMount() {
        // dirty hack but I'm pressed for time
        window.clearTimeout(this.timeout);

        this.timeout = window.setTimeout(() => {
            this.setState({
                hasBeenAnimated: true
            })
        }, 1000)
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeout);
    }

    render() {
        const animate = this.state.hasBeenAnimated 
                        ? '' 
                        : 'animate';

        return (
            <div className={'text-container ' + animate}>
                <h3>Hello, my name is <strong>Zlatko Rusev</strong>.</h3>
                I am a full-stack web developer and technology enthusiast. Feel free to take a look at my latest projects on the web portfolio page.
            </div>
        )
    }
}

export default AboutPage;
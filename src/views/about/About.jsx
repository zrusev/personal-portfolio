import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
// import envelope from '../../assets/images/message-closed-envelope.png';
// import github from '../../assets/images/github.png';
// import linkedin from '../../assets/images/linkedin.png';
// import facebook from '../../assets/images/facebook.png';
import './about.scss';
import avatar from '../../assets/images/avatar.jpg';

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasBeenAnimated: false,
            isVisible: false
        }
    }

    componentDidMount() {
        // dirty hack but I'm pressed for time
        window.clearTimeout(this.timeout);

        this.timeout = window.setTimeout(() => {
            this.setState({
                hasBeenAnimated: true,
                isVisible: true
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
            <Fragment>
                <NavigationLeft direction="experience" />
                <div className={'text-container ' + animate}>
                    <div>
                        <h3>Hello, my name is <strong>Zlatko Rusev</strong>.</h3>
                            I am a full-stack web developer and technology enthusiast.
                            <br/>
                            Feel free to take a look at my latest projects on the web <Link to="/portfolio" style={{ textDecoration: 'none' }}><strong>portfolio</strong></Link> page.
                    </div>
                    <div className='avatar-wrapper'>
                        <img src={process.env.NODE_ENV === 'production'
                            ? avatar.replace('../../', 'images/')
                            : avatar
                        } alt="avatar image" />
                    </div>
                </div>
                <div className="social">
                    <ul className={this.state.isVisible ? 'visible' : ''}>
                        <li><a href="mailto:zlatko.rusev@gmail.com"><div className="svg-social"></div></a></li>
                        <li><a href="https://github.com/zrusev" target="_blank"><div className="svg-social"></div></a></li>
                        <li><a href="https://www.linkedin.com/in/zlatko-rusev" target="_blank"><div className="svg-social"></div></a></li>
                        <li><a href="https://www.facebook.com/zlatko.rusev" target="_blank"><div className="svg-social"></div></a></li>
                        <li><a href="https://open.spotify.com/user/11130161695?si=KFpAx5fiQc2N8NQRpcqoqQ" target="_blank"><div className="svg-social"></div></a></li>
                    </ul>
                </div>
                <NavigationRight direction="portfolio" />
            </Fragment>
        )
    }
}

export default AboutPage;
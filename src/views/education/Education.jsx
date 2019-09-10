import React, { Component, Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './education.scss';

export default class EducationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: false
        }
    }

    setMobile = () => {
        this.setState({
            isMobile: window.innerWidth < 1024
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.setMobile, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setMobile);
    }

    render() {
        return (
            <Fragment>
                <NavigationLeft direction="portfolio" />
                <section className={`section section-${this.state.isMobile ? 'experience' : 'education'}`}>
                    <header>
                        <h3>Academic background</h3>
                    </header>
                    <ol className={this.state.isMobile ? 'experience' : 'education'}>
                        <li>
                            <strong className="title">Mar 2019</strong>
                                <span className="content">
                                    <strong><i>JavaScript WEB DEVELOPER</i></strong>   
                                    <br />
                                    <strong>Software University SoftUni</strong>
                                </span>
                        </li>
                        <li>
                            <strong className="title">Sept 2018</strong>
                            <span className="content">
                                <strong><i>C# WEB DEVELOPER</i></strong>   
                                <br />
                                <strong>Software University SoftUni</strong>
                            </span>
                        </li>
                        <li>
                            <strong className="title">Sept 2013</strong>
                            <span className="content">
                                <strong><i>MASTER OF LAW</i></strong>
                                <br />
                                <strong>UNWE Sofia</strong>
                                <br />
                                Acquired legal capacity
                            </span>
                        </li>
                        <li>
                            <strong className="title">May 2007</strong>
                            <span className="content">
                                <strong><i>SPANISH LANGUAGE</i></strong>
                                <br />
                                <strong><b>School of Roman Languages G. S. Rakovski Bourgas</b></strong>
                            </span>
                        </li>    
                    </ol>
                </section>
                <NavigationRight direction="experience" />
            </Fragment>
        )
    }
};
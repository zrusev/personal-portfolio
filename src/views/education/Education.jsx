import React, { Component, Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import { isMobile } from 'react-device-detect';
import './education.scss';

export default () =>  {
    return (
        <Fragment>
            <NavigationLeft direction="skills" />
            <section className={`section section-${isMobile ? 'experience' : 'education'}`}>
                <header>
                    <h3>Academic background</h3>
                </header>
                <ol className={isMobile ? 'experience' : 'education'}>
                    <li>
                        <strong className="title">Mar 2019</strong>
                            <span className="content">
                                <a href="https://softuni.bg/certificates/details/66724/328878e2" target="_blank">
                                    <div className="position">
                                        JAVASCRIPT WEB DEVELOPER
                                    </div>
                                </a>
                                <strong>Software University SoftUni</strong>
                            </span>
                    </li>
                    <li>
                        <strong className="title">Sept 2018</strong>
                        <span className="content">
                            <a href="https://softuni.bg/certificates/details/66757/666b620c" target="_blank">
                                <div className="position">
                                    C# WEB DEVELOPER
                                </div>
                            </a>
                            <strong>Software University SoftUni</strong>
                        </span>
                    </li>
                    <li>
                        <strong className="title">Sept 2013</strong>
                        <span className="content">
                            <div className="position">
                                MASTER OF LAW
                            </div>
                            <strong>UNWE Sofia</strong>
                            <br />
                            Acquired legal capacity
                        </span>
                    </li>
                    <li>
                        <strong className="title">May 2007</strong>
                        <span className="content">
                            <div className="position">
                                SPANISH LANGUAGE
                            </div>
                            <strong><b>School of Roman Languages G. S. Rakovski Bourgas</b></strong>
                        </span>
                    </li>
                </ol>
            </section>
            <NavigationRight direction="experience" />
        </Fragment>
    )
};
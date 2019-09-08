import React from 'react';
import './education.css';

export default () => {
    return (
        <section className="section section-timeline">
            <header>
                <h3>Academic background</h3>
            </header>
            <ol className="timeline">
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
    )
};
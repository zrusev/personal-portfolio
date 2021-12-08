import React, { Component, Fragment, useState, useEffect } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './skills.scss';
import service from '../../services/skills-service';

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        service()
            .then(skills => setSkills(skills.data));

        const timeoutID = window.setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => window.clearTimeout(timeoutID);
    }, []);

    if (!skills) {
        return (
            <Fragment>
                <NavigationLeft direction="portfolio" />
                <div className="spinner"></div>
                <NavigationRight direction="education" />
            </Fragment>
        )
    }

    return (
        <Fragment>
            <NavigationLeft direction="portfolio" />
            <div className='media-container'>
                <div className='box'>
                    {
                        skills.map(skill => (
                            <div id={skill.id} key={skill.id} className={
                                'media-skill' + (isVisible ? ' visible' : '')}>{skill.name}</div>
                        ))
                    }
                </div>
            </div>
            <NavigationRight direction="education" />
        </Fragment>
    )
}
import React, { Fragment, useState, useEffect, useRef } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './skills.scss';
import service from '../../services/skills-service';

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const [skills, setSkills] = useState([]);
    const itemsRef = useRef([]);

    const clickHandler = (id) => {
        const current = itemsRef.current[id].className;

        if(current.indexOf('open') >  -1) {
            itemsRef.current[id].className = current.replace('open', 'closed');
            return;
        }

        if(current.indexOf('closed') >  -1) {
            itemsRef.current[id].className = current.replace('closed', 'open');
            return;
        }

        itemsRef.current[id].className = current.replace('animated', 'open');
    };

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, skills.length);
     }, [skills]);

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
                            <div
                                id={skill.id}
                                key={skill.id}
                                ref={el => itemsRef.current[skill.id] = el}
                                className={'media-skill animated' + (isVisible ? ' visible' : '')}
                                onClick={() => clickHandler(skill.id)}
                            >
                                {skill.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <NavigationRight direction="education" />
        </Fragment>
    )
}
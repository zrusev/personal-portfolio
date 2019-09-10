import React, { Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './portfolio.scss';
import '../../assets/images/lake.JPG';

export default () => {
    return (
        <Fragment>
            <NavigationLeft direction="about" />
            <div className="media ar-9x16">
                <div className="tags">
                    <span>tag1tag1</span>
                    <span>tag2tag1</span>
                    <span>tag3</span>
                    <span>tag4</span>
                </div>
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <div className="media ar-9x16">
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <div className="media ar-9x16">
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <div className="media ar-9x16">
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <div className="media ar-9x16">
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <div className="media ar-9x16">
                <img src="./images/lake.JPG" alt="mountain" />
            </div>
            <NavigationRight direction="education" />
        </Fragment>
    )
};
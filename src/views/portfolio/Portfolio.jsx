import React, { Fragment } from 'react';
import './portfolio.css';
import '../../assets/images/lake.JPG';

export default () => {
    return (
        <Fragment>
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
        </Fragment>
    )
};
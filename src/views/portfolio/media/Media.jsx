import React from 'react';
import './media.scss';

export default (props) => {
    const { entities, urls } = props;

    return (
        entities.map(entity => (                     
            <a href={entity.address} target="_blank" key={entity.id} id={entity.id}>
                <div className="media ar-9x16" >
                    <div className="tags">
                        {
                            entity.tags.map((tag, ind) => (
                                <span id={ind} key={ind}>{tag}</span>
                            ))
                        }
                    </div>
                    <img src={urls[entity.name]} alt={entity.name} />
                </div>
            </a>
        ))
    )
}
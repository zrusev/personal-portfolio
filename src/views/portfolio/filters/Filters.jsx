import React, { Fragment } from 'react';
import './filters.scss';

export default (props) => {
    const { tags, filterTags, isActive } = props;

    return (
        <Fragment>
            <div className="filters">
                <span className={isActive.includes('SHOW ALL') ? 'active' : ''} 
                      onClick={filterTags}
                      data-id="SHOW ALL">SHOW ALL</span>                    
                {
                    [...tags].map((tag, ind) => (
                        <span  
                            className={isActive.includes(tag) ? 'active' : ''}
                            id={ind} 
                            key={ind} 
                            data-id={tag} 
                            onClick={filterTags}
                        >{tag}</span>
                    ))
                }
            </div>
        </Fragment>
    )
}
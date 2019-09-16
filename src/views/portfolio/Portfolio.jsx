import React, { Component, Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import portfolioService from '../../services/portfolio-service';
import './portfolio.scss';
import ctx from '../../services/ctx-service';

export default class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            entities: [],
            urls: {...ctx},
            tags: null,
        }

        this.filterTags = this.filterTags.bind(this);
    }

    filterTags(event) {
        const filter = event.target.dataset.id;
        const data = Object.values(this.state.data)
            .reduce((acc, curr) => Object.values(curr)
                .filter(tag => tag.tags.includes(filter))
            , []);
        
        this.setState({
            data
        });
    }

    componentDidMount() {
        return portfolioService.get()
            .then(data => {
                const tags = new Set(Object.values(data)
                    .reduce((acc, curr) => {
                            return acc.concat(curr.map(t => t.tags))
                        }, [])
                    .reduce((acc, curr) => {
                            return acc.concat(curr)
                        }, []));

                this.setState({
                    data,
                    tags,
                    entities: data,
                });
            })
            .catch(error => {
                console.log(error);                
            });
    }

    render() {
        const { data: entities } = this.state.entities;

        if (!entities) {
            return (
                <Fragment>
                    <NavigationLeft direction="about" />
                    <div className="spinner"></div>                   
                    <NavigationRight direction="education" />
                </Fragment>
            )
        }

        const { urls } = this.state;
        const { tags } = this.state;

        return (
            <Fragment>
                <NavigationLeft direction="about" />
                <div className="filters">
                    <span onClick={this.filterTags} data-id="SHOW ALL">SHOW ALL</span>                    
                    {
                        [...tags].map((tag, ind) => (
                            <span 
                                className="visible" 
                                id={ind} 
                                key={ind} 
                                data-id={tag} 
                                onClick={this.filterTags}
                            >{tag}</span>
                        ))
                    }
                </div>
                {                    
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
                }
                <NavigationRight direction="education" />
            </Fragment>
        )
    }
};
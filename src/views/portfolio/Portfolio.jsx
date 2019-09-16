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
            urls: {...ctx},
            tags: null,
        }
    }

    componentDidMount() {
        return portfolioService.get()
            .then(data => {
                const tags = new Set(Object.values(data)
                    .reduce((acc, cur) => {
                            return acc.concat(cur.map(t => t.tags))
                        }, [])
                    .reduce((acc, cur) => {
                            return acc.concat(cur)
                        }, []));

                this.setState({
                    data,
                    tags
                });
            })
            .catch(error => {
                console.log(error);                
            });
    }

    render() {
        const { data: entities } = this.state.data;

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
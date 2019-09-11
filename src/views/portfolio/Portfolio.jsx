import React, { Component, Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import portfolioService from '../../services/portfolio-service';
import './portfolio.scss';

export default class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return portfolioService.get()
            .then(data => {                
                this.setState({
                    data
                })
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
                        <div>Loading...</div>                      
                    <NavigationRight direction="education" />
                </Fragment>
            )
        }
        
        return (
            <Fragment>
                <NavigationLeft direction="about" />
                {                    
                    entities.map(entity => (                     
                        <div className="media ar-9x16" key={entity.id} id={entity.id}>
                            <div className="tags">
                                {
                                    entity.tags.map((tag, ind) => (
                                        <span id={ind} key={ind}>{tag}</span>
                                    ))
                                }
                            </div>
                            <img src={entity.url} alt={entity.name} />
                        </div>
                    ))
                }
                <NavigationRight direction="education" />
            </Fragment>
        )
    }
};
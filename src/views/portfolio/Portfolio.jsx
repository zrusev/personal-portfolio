import React, { Component, Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import MediaComponent from './media/Media';
import FiltersComponent from './filters/Filters';
import portfolioService from '../../services/portfolio-service';
import ctx from '../../services/ctx-service';
import './spinner.scss';

export default class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            entities: [],
            urls: {...ctx},
            tags: null,
            isActive: ['SHOW ALL'],
        }

        this.filterTags = this.filterTags.bind(this);
    }

    filterTags(event) {        
        const filter = event.target.dataset.id;
        let data = Object.values(this.state.data)
        .reduce((acc, curr) => Object.values(curr)
                .filter(tag => tag.tags.includes(filter))
                , []);

                if (data.length === 0) {
            data = this.state.data.data;
        }
       
        this.setState({
            entities: {
                data
            },
            isActive: [filter],
        })
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

        const { urls, tags } = this.state;

        return (
            <Fragment>
                <NavigationLeft direction="about" />
                <FiltersComponent tags={tags} filterTags={this.filterTags} isActive={this.state.isActive} />
                <MediaComponent entities={entities} urls={urls} />
                <NavigationRight direction="education" />
            </Fragment>
        )
    }
};
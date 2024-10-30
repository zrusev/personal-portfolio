import React, { Fragment } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './experience.scss';

export default () => {
    return (
        <Fragment>
            <NavigationLeft direction="education" />
            <section className="section section-experience">
                <header>
                    <h3>Work Experience</h3>
                </header>
                <ol className="experience">
                    <li>
                    <strong className="title">Jan 2021 – present</strong>
                        <span className="content">
                            <a href="https://www.accenture.com/us-en" target="_blank">
                                <div className="company">Accenture Bulgaria</div>
                            </a>
                            <div className="position">Senior Business Analyst</div>
                            <div className="position-description">
                                For the past several years, I've been developing a comprehensive data-gathering solution that streamlines data collection, enhances data quality, and supports informed decision-making across key business functions.
                                <br />
                                I am a skilled data specialist with expertise in automation, data management, and visualization, leveraging a variety of tools and technologies:
                            </div>
                            <div className="details">
                                [ Data collection: Advanced VBA <div className="svg-social"></div> ]
                                <br />
                                [ Data storage and management: SQL <div className="svg-social"></div>, T-SQL ]
                                <br />
                                [ CSM/KSMs aggregation: Python <div className="svg-social"></div>, Pandas <div className="svg-social"></div>, NumPy <div className="svg-social"></div> ]
                                <br />
                                [ Quality metrics management: JavaScript <div className="svg-social"></div> ]
                                <br />
                                [ Browser automations: Selenium <div className="svg-social"></div> ]
                                <br />
                                [ Data extraction: MongoDB <div className="svg-social"></div> aggregation pipelines ]
                                <br />
                                [ Visualizations and automations: Power BI <div className="svg-social"></div>, Power Automate <div className="svg-social"></div>, Power Query <div className="svg-social"></div>, SharePoint <div className="svg-social"></div> ]
                                <br />
                                [ Graphical representation: HTML <div className="svg-social"></div>/CSS <div className="svg-social"></div> ]
                                <br />
                                [ Multiple process automations: VBA <div className="svg-social"></div>, C# <div className="svg-social"></div>, JavaScript <div className="svg-social"></div> ]
                            </div>
                        </span>

                    </li>
                    <li>
                        <strong className="title">May 2017 – Jan 2021</strong>
                        <span className="content">
                            <a href="https://www.aig.com" target="_blank">
                                <div className="company">AIG Center of Excellence</div>
                            </a>
                            <div className="position">Development Support Analyst</div>
                            <div className="position-description">
                                Development Support Analyst of CoE Sofia works with business partners to support standard requests for design, develop and support a mission critical automation solutions.
                            </div>
                            <div className="details">
                                <span>
                                    [ Successfully developed and supported a data collection tool for gathering the basic KPIs within the center, data management and dashboard reporting. Reports across hi-level management are built up on the provided data. ]
                                </span>
                                <br />
                                <span>
                                    [ Successfully deployed and implemented the mentioned tool in Malaysia. ]
                                </span>
                                <br />
                                <span>
                                    [ Successfully developed a career development framework designed for in-house career planning which facilitates the employee-team leader relationship in building the employee’s soft and technical skills. ]
                                </span>
                                <br />
                                <span>
                                    [ Successfully developed a self-sufficient robotic solution for data gathering which collects information for regular daily reporting needs. ]
                                </span>
                                <br />
                                <span>
                                    [ Successfully built a JavaScript based dashboard for fetching data without any deployed server using IE and ActiveX model; using several data visualization libraries. ]
                                </span>
                                <br />
                                <span>
                                    [ Multiple process automations across the teams within the center, FTE savings and processes excellence. ]
                                </span>
                            </div>
                        </span>
                    </li>
                    <li>
                        <strong className="title">Sept 2016 – May 2017</strong>
                        <span className="content">
                            <a href="https://www.aig.com" target="_blank">
                                <div className="company">AIG Center of Excellence</div>
                            </a>
                            <div className="position">Reporting Administrator</div>
                            <div className="position-description">
                                Reporting Administrator of CoE Sofia works with TPA reports and prepares necessary summaries.
                            </div>
                            <div className="details">
                                <span>
                                    [ Retrieve the MI/KPI Report or Claims Loss Runs received from TPA via the outsourcing inbox or other mail address. This will have to be checked on a daily basis as the reports will come in on different dates. ]
                                </span>
                                <br />
                                <span>
                                    [ Transfer the updated data for the relevant month from the MI/KPI Card into the TPA Metric Card. Update ﬁelds in the Metric card summary tab along with graphs. ]
                                </span>
                            </div>
                        </span>
                    </li>
                    <li>
                        <strong className="title">Sept 2014 - Sept 2016</strong>
                        <span className="content">
                            <a href="https://www.aig.com" target="_blank">
                                <div className="company">AIG Center of Excellence</div>
                            </a>
                            <div className="position">Operations Process Administrator with Spanish language</div>
                            <div className="position-description">
                                Operations Process Administrator with Spanish language of CoE Sofia performs different administrative functions and provides a package of ancillary and administrative services corresponding to the daily needs of those customers, arising in the context of their activities.
                            </div>
                            <div className="details">
                                <span>
                                    [ Overally administer document flow associated with the processes administered, including preparing/drawing up documents, reading, editing, and proofreading of documents, processing, and archiving documents. ]
                                </span>
                            </div>
                        </span>
                    </li>
                </ol>
            </section>
            <NavigationRight direction="about" />
        </Fragment>
    )
};
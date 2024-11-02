import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import NavigationLeft from '../../components/common/Navigation-left/Navigation-left';
import NavigationRight from '../../components/common/Navigation-right/Navigation-right';
import './experience.scss';

export default () => {
    const [hovered, setHovered] = useState(false);

    useEffect (() => {
        const timeoutId = setTimeout(() => {
            setHovered(true);
          }, 500);

          return () => clearTimeout(timeoutId);
    }, []);


    return (
        <Fragment>
            <NavigationLeft direction="education" />
            <section className="section section-experience" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
                            <div className={hovered ? "details hovered" : "details"}>
                                [ Collection and extraction:  <div className="svg-social"></div> VBA, <div className="svg-social"></div> MongoDB aggregation pipelines ]
                                <br />
                                [ Storage and management: <div className="svg-social"></div> SQL, T-SQL ]
                                <br />
                                [ Data aggregation: <div className="svg-social"></div> Python, <div className="svg-social"></div> Pandas, <div className="svg-social"></div> NumPy ]
                                <br />
                                [ Quality management: <div className="svg-social"></div> JavaScript ]
                                <br />
                                [ Browser automations: <div className="svg-social"></div> Selenium ]
                                <br />
                                [ Visualization and automations: <div className="svg-social"></div> Power BI, <div className="svg-social"></div> Power Automate, <div className="svg-social"></div> Power Query, <div className="svg-social"></div> SharePoint ]
                                <br />
                                [ Graphical representation: <div className="svg-social"></div>HTML/<div className="svg-social"></div>CSS ]
                                <br />
                                [ Process automations: <div className="svg-social"></div> VBA, <div className="svg-social"></div> C#, <div className="svg-social"></div> JavaScript ]
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
                                The Development Support Analyst at CoE Sofia collaborates with business partners to fulfill standard requests for design, development, and support of essential automation solutions.
                            </div>
                            <div className={hovered ? "details hovered" : "details"}>
                                <span>
                                    [ Created and maintained a data collection tool to gather critical and key performance indicators. ]
                                </span>
                                <br />
                                <span>
                                    [ Deployed solutions across multiple sites. ]
                                </span>
                                <br />
                                <span>
                                    [ Developed a career development framework to assist with in-house career planning, enhancing employee-team lead relationship and fostering both soft and technical skills. ]
                                </span>
                                <br />
                                <span>
                                    [ Created an autonomous robotic solution for data collection, designed to meet daily reporting requirements. ]
                                </span>
                                <br />
                                <span>
                                    [ Built a JavaScript dashboard for data visualization. ]
                                </span>
                                <br />
                                <span>
                                    [ Achieved multiple process automation initiatives across teams, leading to savings in full-time equivalent (FTE) resources and improved process efficiency. ]
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
                            <div className={hovered ? "details hovered" : "details"}>
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
                            <div className={hovered ? "details hovered" : "details"}>
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
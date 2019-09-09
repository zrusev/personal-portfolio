import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/app.css';
import Menu from './components/common/Menu/Menu';
import Hamburger from './components/common/Hamburger/Hamburger';
import NavigationLeft from './components/common/Navigation-left/Navigation-left';
import NavigationRight from './components/common/Navigation-right/Navigation-right';
import AboutPage from './views/about/About';
import PortfolioPage from './views/portfolio/Portfolio';
import ExperiencePage from './views/experience/Experience';
import EducationPage from './views/education/Education';

export default () => {
  return (
    <main>
      <Menu />
      <Hamburger />
      <NavigationLeft />
      <div className="container">
          <Switch>
            <Route exact path='/' component={AboutPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
            <Route exact path='/experience' component={EducationPage} />
            <Route exact path='/education' component={ExperiencePage} />
          </Switch>
      </div>
      <NavigationRight />
    </main>
  );
};
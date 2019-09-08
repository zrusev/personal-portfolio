import React from 'react';
import '../style/app.css';
import Menu from './components/common/Menu/Menu';
import Hamburger from './components/common/Hamburger/Hamburger';
import NavigationLeft from './components/common/Navigation-left/Navigation-left';
import NavigationRight from './components/common/Navigation-right/Navigation-right';
// import AboutPage from './views/about/About';
// import EducationPage from './views/education/Education';
import PortfolioPage from './views/portfolio/Portfolio';
// import TimelinePage from './views/timeline/Timeline';

export default () => {
  return (
    <main>
      <Menu />
      <Hamburger />
      <NavigationLeft />
      <div className="container">
          <PortfolioPage />
      </div>
      <NavigationRight />
    </main>
  );
};
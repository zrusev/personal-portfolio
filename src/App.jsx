import React from 'react';
import '../style/app.css';
import Menu from './components/common/Menu/Menu';
import Hamburger from './components/common/Hamburger/Hamburger';
import NavigationLeft from './components/common/Navigation-left/Navigation-left';
import NavigationRight from './components/common/Navigation-right/Navigation-right';
import AboutPage from './views/about/About';
import EducationPage from './views/education/Education';
// import PortfolioPage from './views/portfolio/Portfolio';
import TimelinePage from './views/timeline/Timeline';


// <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap" rel="stylesheet">
// <link rel="stylesheet" href="../../assets/css/about/index.css">
// <link rel="stylesheet" href="../../assets/css/about/hamburger.css">
// <link rel="stylesheet" href="../../assets/css/about/menu.css">
// <script src="https://use.fontawesome.com/03c43a69cd.js"></script>
// <script src="../../scripts/about/hamburger.js"></script>

export default () => {
  return (
    <main>
      <Menu />
      <Hamburger />
      <NavigationLeft />
      <div className="container">
          <AboutPage />
      </div>
      <NavigationRight />
    </main>
  );
};
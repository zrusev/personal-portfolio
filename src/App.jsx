import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/app.css';
import { MenuProvider, defaultMenuState } from './components/contexts/MenuContext';
import Menu from './components/common/Menu/Menu';
import Hamburger from './components/common/Hamburger/Hamburger';
import NavigationLeft from './components/common/Navigation-left/Navigation-left';
import NavigationRight from './components/common/Navigation-right/Navigation-right';
import AboutPage from './views/about/About';
import PortfolioPage from './views/portfolio/Portfolio';
import ExperiencePage from './views/experience/Experience';
import EducationPage from './views/education/Education';

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      menuState: {
        ...defaultMenuState,
        updateMenuState: this.updateMenuState
      }
    }
    
    this.updateMenuState = this.updateMenuState.bind(this);
  }

  updateMenuState = (state) => {
    this.setState({
      menuState: { ...state, updateMenuState: this.updateMenuState }
    });
  }

  render() {
    const { menuState } = this.state;

      return (
        <main>
          <MenuProvider value={menuState}>
            <Menu isChecked={this.state.menuState.isChecked} />
            <Hamburger buttonState={this.state.menuState.buttonState}
              isChecked={this.state.menuState.isChecked}
              updateMenuState={this.updateMenuState}
            />
          </MenuProvider>
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
  }
};
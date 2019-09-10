import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../style/app.css';
import { MenuProvider, defaultMenuState } from './components/contexts/MenuContext';
import Menu from './components/common/Menu/Menu';
import Hamburger from './components/common/Hamburger/Hamburger';
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
            <Menu isChecked={this.state.menuState.isChecked} 
                  updateMenuState={this.updateMenuState}
            />
            <Hamburger isClosed={this.state.menuState.isClosed}
                       isChecked={this.state.menuState.isChecked}
                       updateMenuState={this.updateMenuState}
            />
          </MenuProvider>
          <div className="container">
              <Switch>
                <Route exact path='/' render={() => (<Redirect to="/about"/>)} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/portfolio' component={PortfolioPage} />
                <Route exact path='/education' component={EducationPage} />
                <Route exact path='/experience' component={ExperiencePage} />
                <Route render={() => (<Redirect to="/about"/>)} />
              </Switch>
          </div>
        </main>
      );
  }
};
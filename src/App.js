import React, {Component} from 'react';
import { Route , Switch, Redirect } from 'react-router-dom';
import 'boxicons';
import './default.scss'

//layouts
import MainLayout from './layouts/MainLayout';

//pages
import './default.scss';
import HomePage from './pages/HomePage/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          
              <Route exact path="/" render={() => (
                <MainLayout>
                  <HomePage />
                </MainLayout>
              )} />
          
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'boxicons';
import './default.scss'
import { auth, handleUserProfile } from './firebase/utils';

//layouts
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout'

//pages
import './default.scss';
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/Login/index'

const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount(){
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    
    return (
      <div className="App">
        <div className="main">
        <Switch>
              <Route exact path="/" render={() => (
                <MainLayout currentUser={currentUser}>
                  <HomePage />
                </MainLayout>
              )} />
              <Route exact path="/login" 
                render={() => currentUser ? <Redirect to="/" /> : ( 
                    <LoginLayout currentUser={currentUser}>
                      <LoginPage />
                    </LoginLayout>
                )} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

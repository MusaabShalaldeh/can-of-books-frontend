import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BestBooks from './BestBooks'
import Login from './Login'
import Profile from './components/profile';
import './App.css';

class App extends Component {


  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(user);
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated ? <BestBooks/> : <Login/>}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {isAuthenticated && <Profile name={user.name} pfp={user.picture} email={user.email}/>}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

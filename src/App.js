import './App.css';
import React, { Component } from 'react';
//import axios from 'axios';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';

import Header from './component/Header/Header';
import routes from './component/routee';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.main} exact={route.exact} />
          )
          )}
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;


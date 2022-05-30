import React, { Component } from 'react';
// import { Router } from 'react-router-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import routes from './component/routes';
export default class Example extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className=" navbar-vav mr-auto">
                          <ul></ul>
                          <ul></ul>
                          <ul></ul>

                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        {this.showContentAbout(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
    showContentAbout =(routes)=>{
        var result = null;
        if(routes.length >0){
            result=routes.map((route,index)=>{
                return(
                    <Route key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}/>
                );
            });
        }
        return result;
    }
}

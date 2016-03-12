import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Header from './components/header';
import Home from './pages/home';

import Imgur from './services/imgur';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            state: []
        }
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="Home" component={Home}></Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));


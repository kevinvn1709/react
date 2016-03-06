import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
render((
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('app'))
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default class Home extends React.Component {
    render() {
        return (
            <h1>Home Page</h1>
        )
    }
}

export default class About extends React.Component {
    render() {
        return (
            <h1>About</h1>
        )
    }
}

export default class Contact extends React.Component {
    render() {
        return (
            <h1>Contact</h1>
        )
    }
}

const appHistory = useRouterHistory(createHashHistory)({queryKey: false})
var routes = (
    <Router history={appHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory} from 'react-router';
import ReduxPromise from 'redux-promise';
import reducers from './configs/reducers';
import routes from './configs/routes';


const createStoreWithMiddleware = compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}></Router>
    </Provider>
    , document.getElementById('app'));


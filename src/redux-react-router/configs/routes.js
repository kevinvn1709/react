import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PostIndex from '../modules/posts/components/list'
import PostCreate from '../modules/posts/components/create';

class App extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="/post/create" component={PostCreate}/>
    </Route>
);
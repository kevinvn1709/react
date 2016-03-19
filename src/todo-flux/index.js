import React from 'react';
import { render } from 'react-dom';

import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <InputTask />
                <TaskList />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
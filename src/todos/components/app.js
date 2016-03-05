import React from 'react';
import TaskList from './TaskList'
import $ from 'jquery';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: []}
    }

    render() {
        return (
            <div>
                <h1>React Tutorial</h1>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }

    componentDidMount() {
        this.req = $.get("http://jsonplaceholder.typicode.com/todos?_start=0&_end=10", result => {
            _.map(result, item => {
                this.state.tasks.push(item);
            });
            this.setState({tasks: this.state.tasks});
        });
    }

    componentWillUnmount() {
        this.req.abort();
    }
}
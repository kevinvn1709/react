import React from 'react';
import TableHeader from './TableHeader'
import Task from './Task'
import CreateTask from  './CreateTask'
import _ from 'lodash';


export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        }
    }

    render() {
        return (
            <div>
                <CreateTask createTask={this.createTask.bind(this)}/>
                <table>
                    <TableHeader />
                    <tbody>
                    {
                        _.map(this.state.tasks, (task, index) => <Task key={index} {...task}
                                                                       toggleTask={this.toggleTask.bind(this)}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }

    toggleTask(title) {
        const foundTask = _.find(this.state.tasks, task => task.title === title);
        foundTask.completed = !foundTask.completed;
        this.setState({tasks: this.state.tasks});
    }

    createTask(title) {
        this.state.tasks.push({
            title: title,
            completed: false,
        });

        this.setState({tasks: this.state.tasks});
    }

    componentDidMount() {
    }
}
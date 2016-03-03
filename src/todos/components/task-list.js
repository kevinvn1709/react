import React from 'react';
import TableHeader from './table-header'
import Task from './task'
import CreateTask from  './create-task'
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
                        _.map(this.state.tasks, (task, index) => <Task key={index} {...task} />)
                    }
                    </tbody>
                </table>
            </div>
        )
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
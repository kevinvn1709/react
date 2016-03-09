import React from 'react';
import ReactDOM from 'react-dom';

import InputTask from './components/input-task';
import TaskList from './components/task-list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                status: 'doing',
                name: 'Make a tutorials',
                label: 'NORMAL'
            }, {
                status: 'doing',
                name: 'Make a video',
                label: 'IMPORTANT'
            }]
        }
    }

    render() {
        return (
            <div class="panel panel-primary">
                <div class="panel-heading">To do list</div>
                <div class="panel-body">
                    <div class="row col-lg-8">
                        <InputTask addNewTask={this.addNewTask.bind(this)}/>
                    </div>
                    <div class="row col-lg-12">&nbsp;</div>
                    <div class="row col-lg-12">
                        <TaskList {...this.state.data} />
                    </div>
                </div>
            </div>
        )
    }

    addNewTask(taskName, label) {
        var newTask = {
            status: 'doing',
            name: taskName,
            label: label == true ? 'IMPORTANT' : 'NORMAL',
        }
        this.state.data.push(newTask);
        this.setState({data: this.state.data});
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
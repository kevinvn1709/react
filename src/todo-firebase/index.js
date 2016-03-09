import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import ReactFire from 'reactfire';
import ReactMixin from 'react-mixin';

import InputTask from './components/input-task';
import TaskList from './components/task-list';


var rootUrl = 'https://app-trinm.firebaseio.com/';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loaded: false
        }
    }

    componentWillMount() {
        var ref = new Firebase(rootUrl + 'items/');
        this.bindAsArray(ref, 'items');
        ref.on('value', this.handleLoaded.bind(this));
    }

    render() {
        var taskList;
        if (this.state.loaded == true) {
            taskList = <TaskList items={this.state.items} />
        } else {
            taskList = 'Fetching data from Firebase...';
        }
        return (
            <div class="panel panel-primary">
                <div class="panel-heading">To do list</div>
                <div class="panel-body">
                    <div class="row col-lg-8">
                        <InputTask addNewTask={this.addNewTask.bind(this)}/>
                    </div>
                    <div class="row col-lg-12">&nbsp;</div>
                    <div class="row col-lg-12">
                        {taskList}
                    </div>
                </div>
            </div>
        )
    }

    handleLoaded() {
        this.setState({loaded: true});
    }

    addNewTask(taskName, label) {
        var newTask = {
            done: false,
            name: taskName,
            label: label == true ? 'IMPORTANT' : 'NORMAL',
        }
        this.firebaseRefs.items.push(newTask);
    }
}
ReactMixin(App.prototype, ReactFire);

ReactDOM.render(<App />, document.getElementById('app'));
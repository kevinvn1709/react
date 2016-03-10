import React from 'react';
import _ from 'lodash';
import Task from './task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: this.props.items,
        }
    }

    render() {
        return (
            <div class="list-group">
                {
                    _.map(this.state.taskList, (task, index) => {
                        return <Task labelChange={this.handelLabelChange.bind(this, index)}
                                     key={_.uniqueId()} task={task}/>
                    })
                }
            </div>
        )
    }

    handelLabelChange(index) {
        this.state.taskList.filter((task, i) => {
            if (index == i) {
                if (task.label == 'NORMAL') {
                    task.label = 'IMPORTANT';
                } else {
                    task.label = 'NORMAL';
                }
            }
        })
        this.setState({taskList: this.state.taskList});
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
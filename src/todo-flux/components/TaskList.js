import React from 'react';
import TodoStore from '../stores/TodoStore';
import _ from 'lodash';

import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.handleOnChange.bind(this));
        TodoStore.on("create", this.handleOnCreate.bind(this));
    }

    handleOnChange() {
        this.setState({
            todos: TodoStore.getAll(),
        });
    }

    handleOnCreate(){
        this.setState({
            todos: TodoStore.getAll(),
        });
        alert('OK');
    }

    render() {
        return (
            <ul>
                {
                    _.map(this.state.todos, (item) => {
                        return <Task key={_.uniqueId()} data={item}/>
                    })
                }
            </ul>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
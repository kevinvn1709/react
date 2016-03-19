import React from 'react';

import TodoActions from '../actions/TodoActions';

export default class InputTask extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="taskName"/>
                <button>Add</button>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        TodoActions.createTodo(this.refs.taskName.value);

        this.refs.taskName.value = "";
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
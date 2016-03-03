import React from 'react';

export default class CreateTask extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="What is your task?" ref="createInput"/>
                <button>Create</button>
            </form>
        )
    }

    componentDidMount() {

    }
}
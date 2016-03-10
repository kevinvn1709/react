import React from 'react';
import $ from 'jquery';

export default class InputTask extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        var taskName = this.refs.taskName.value;
        var label = this.refs.label.checked;
        console.log(label);
        this.props.addNewTask(taskName, label);
        this.refs.taskName.value = "";
        this.refs.label.checked = false;
    }

    render() {
        var cursor = {"cursor": "pointer"};
        return (
            <form onSubmit={this.handleSubmit.bind(this)} role="form">
                <span style={cursor} class="label label-primary" ref="label" onClick={this.handleClickLabel.bind(this)}>NORMAL</span>
                <div class="input-group">
                    <input type="text" class="form-control" ref="taskName" placeholder="What you want to do ... ?"/>
                    <span class="input-group-btn">
                        <button onClick={this.handleSubmit.bind(this)} class="btn btn-default" type="button">Add
                        </button>
                    </span>
                </div>
            </form>
        )
    }

    handleClickLabel() {
        var element = this.refs.label;
        if ($(element).html() == 'NORMAL') {
            $(element).removeClass('btn-primary').addClass('btn-danger');
            $(element).html('IMPORTANT');
        } else {
            $(element).removeClass('btn-danger').addClass('btn-primary');
            $(element).html('NORMAL');
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
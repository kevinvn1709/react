import React from 'react';

export default class InputTask extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e){
        e.preventDefault();
        var taskName = this.refs.taskName.value;
        var label = this.refs.label.checked;
        console.log(label);
        this.props.addNewTask(taskName, label);
        this.refs.taskName.value = "";
        this.refs.label.checked = false;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} role="form">
                <div class="input-group">
                    <span class="input-group-addon">
                        <input type="checkbox" ref="label"/>
                     </span>
                    <input type="text" class="form-control" ref="taskName" placeholder="What you want to do ... ?"/>
                </div>
            </form>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
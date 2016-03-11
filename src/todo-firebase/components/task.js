import React from 'react';
import Firebase from 'firebase';
import $ from 'jquery';


var rootUrl = 'https://app-trinm.firebaseio.com/';
export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textChange: false,
            taskName: this.props.task.name,
            label: this.props.task.label
        }
    }

    componentWillMount() {
        this.fb = new Firebase(rootUrl + 'items/' + this.props.task['.key']);
    }

    render() {
        var labelStyle = this.props.task.label == 'IMPORTANT' ? 'danger' : 'primary';
        var cursor = {"cursor": "pointer"};
        return (
            <div>
                <span style={cursor} class={"label label-" + labelStyle}
                      onClick={this.labelChange.bind(this)}>{this.state.label}</span>
                <div class="input-group">
                    <span class="input-group-addon">
                        <input type="checkbox" ref="label"/>
                     </span>
                    <input type="text" class="form-control" ref="taskName" value={this.state.taskName}
                           onChange={this.textChange.bind(this)}/>
                    {this.renderAction()}
                </div>
                <div class="clearfix"></div>
            </div>
        )
    }

    renderAction() {
        if (this.state.textChange == true) {
            return (
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button" onClick={this.handleSave.bind(this)}>Save</button>
                    <button class="btn btn-default" type="button" onClick={this.handleUndo.bind(this)}>Undo</button>
                </span>
            )
        } else {
            return (
                <span class="input-group-btn">
                    <button class="btn" type="button" onClick={this.handleDelete.bind(this)}>Delete</button>
                </span>
            )
        }
    }

    componentDidMount() {

    }


    handleSave(event) {
        this.fb.update({name: this.state.taskName});
        this.setState({
            textChange: false,
        })
    }

    handleUndo() {
        this.setState({
            taskName: this.props.task.name,
            textChange: false,
        });
    }

    handleDelete() {
        this.fb.remove();
    }


    labelChange(event) {
        var element = event.target;
        var label;

        if ($(element).html() == 'NORMAL') {
            label = 'IMPORTANT';
        } else {
            label = 'NORMAL';
        }
        this.fb.update({label: label});
    }

    textChange(event) {
        this.setState({
            textChange: true,
            taskName: event.target.value
        })
    }

}
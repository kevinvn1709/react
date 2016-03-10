import React from 'react';
import Firebase from 'firebase';
import $ from 'jquery';


var rootUrl = 'https://app-trinm.firebaseio.com/';
export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fb = new Firebase(rootUrl + 'items/' + this.props.task['.key']);
        console.log(rootUrl + 'items/' + this.props.task['.key']);
    }

    render() {
        var labelStyle = this.props.task.label == 'IMPORTANT' ? 'danger' : 'primary';
        var cursor = {"cursor": "pointer"};
        return (
            <div>
                <span style={cursor} class={"label label-" + labelStyle}
                      onClick={this.labelChange.bind(this)}>{this.props.task.label}</span>
                <div class="input-group">
                    <span class="input-group-addon">
                        <input type="checkbox" ref="label"/>
                     </span>
                    <input type="text" class="form-control" ref="taskName" value={this.props.task.name}
                           onChange={this.handleChange.bind(this)}/>
                    <span class="input-group-btn">
                        <button class="btn" type="button">Delete</button>
                    </span>
                </div>
                <div class="clearfix"></div>
            </div>
        )
    }

    componentDidMount() {

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

    handleChange() {

    }

}
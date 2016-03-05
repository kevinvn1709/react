import React from 'react';


export default class Task extends React.Component {
    constructor() {
        super();
        this.state = {isEditing: false};
    }

    actionEdit() {
        this.setState({isEditing: true});
    }

    actionCancel() {
        this.setState({isEditing: false});
    }

    renderTask() {
        const { title, completed } = this.props;
        const taskStyle = {
            color: completed ? 'green' : 'red',
            cursor: 'pointer'
        }

        return (
            <td onClick={this.toggleTask.bind(this, title)} style={taskStyle}>{this.props.title}</td>
        )
    }

    toggleTask(title) {
        this.props.toggleTask(title);
    }

    renderActions() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.actionCancel.bind(this)}>Cancel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.actionEdit.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        )
    }

    render() {
        return (
            <tr>
                {this.renderTask()}
                {this.renderActions()}
            </tr>
        )
    }

    componentDidMount() {
    }
}
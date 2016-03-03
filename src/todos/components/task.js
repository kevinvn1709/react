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
                <td>{this.props.title}</td>
                {this.renderActions()}
            </tr>
        )
    }

    componentDidMount() {
    }
}
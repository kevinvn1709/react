import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'aaa',
            password: 'aaa',
        }
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        var valueLink = this.linkState('username');
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <legend>Login Form</legend>
                <label>Username:</label><input type="text" ref="username"/>
                <label>Password:</label><input type="password" ref="password"/>
                <button>Submit</button>
            </form>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
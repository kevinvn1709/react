import React from 'react';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }

    render() {
        return (
            <form class="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get 5 days forecase in your favorite city"
                    class="form-control"
                    value={this.state.term}
                    onChange={(event) => { this.setState({term: event.target.value})}}
                />
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary">Search</button>
                </span>
            </form>
        )
    }

    onFormSubmit(event) {
        event.preventDefault();
    }
}
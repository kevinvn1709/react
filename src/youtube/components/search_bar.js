import React from 'react';
import YoutubeAPI from '../services/youtube';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'funny'
        }
    }

    componentWillMount() {

    }

    render() {
        var styleWidth = {width: "60%"};
        var styleInput = {width: "100%"};
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Youtube Search</a>
                    </div>
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form class="navbar-form navbar-left" role="search" style={styleWidth}>
                            <input type="text" class="form-control" placeholder="What's video you looking for ...?"
                                   autoFocus="true"
                                   style={styleInput}
                                   onChange={this.handleOnChange.bind(this)}/>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }

    handleOnChange(event) {
        this.props.onChangeTerm(event.target.value);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
import React from 'react';

export default class Badge extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button class="btn btn-primary" type="button">
                {this.props.message} <span class="badge">{this.props.number}</span>
            </button>
        )
    }
}
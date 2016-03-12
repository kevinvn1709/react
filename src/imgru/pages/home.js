import React from 'react';
import Imgur from '../services/imgur';
import _ from 'lodash';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            topic: []
        }
    }

    componentWillMount() {
        Imgur.getTopic().then(response => {
            this.state.topic = response.data;
            this.setState({topic: this.state.topic});
        });
    }

    render() {
        return (
            <div>
                { this.renderListTopic() }
            </div>
        )
    }

    renderListTopic() {
        if (_.isEmpty(this.state.topic)) {
            return <div>Loading from server...</div>
        } else {
            return (
                <ul>
                    {
                        this.state.topic.map(item => {
                            return <li>{item.name}</li>
                        })
                    }
                </ul>
            )
        }
    }
}
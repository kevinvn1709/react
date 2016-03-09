import React from 'react';
import _ from 'lodash';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="list-group">
                {
                    _.map(this.props.items, (item) => {
                        var labelStyle = item.label == 'IMPORTANT' ? 'danger' : 'primary';
                        return (
                            <a href="#" class="list-group-item">
                                <span class={"label label-" + labelStyle}>{item.label}</span> {item.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
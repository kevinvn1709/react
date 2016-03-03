import React from 'react';
import _ from 'lodash';


export default class App extends React.Component {
    static defaultProps = {
        task: [
            {
                id: 1,
                task: "Make a test",
                isCompleted: true,
            },
            {
                id: 2,
                task: "Plan a schedule",
                isCompleted: true,
            }
        ]
    }

    static propTypes = {}

    constructor() {
        super();
    }

    renderTask() {

    }

    render() {
        console.log(this.props);
        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    _.map(this.props.task, item => {
                        return (
                            <tr key={_.uniqueId()}>
                                <td key={_.uniqueId()}>{item.task}</td>
                                <td key={_.uniqueId()}>{item.isCompleted}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

    componentDidMount() {
        console.log("DONE");
    }
}
import React from 'react';

export default class TableHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <thead>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            </thead>
        )
    }
}

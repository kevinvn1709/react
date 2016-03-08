import React from 'react';
import Badge from './Badge';

export default class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var data = this.props;
        return (
            <div class="col-sm-3">
                <div class="thumbnail">
                    <img
                        src={data.imageUrl}
                        alt="React"/>
                    <div class="caption">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <p>
                            <Badge message={data.button.message} number={data.button.number}/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
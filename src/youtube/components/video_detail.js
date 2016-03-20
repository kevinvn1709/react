import React from 'react';
import _ from 'lodash';

export default class VideoDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        if (_.isEmpty(this.props.video)) {
            return (
                <p>...</p>
            )
        } else {
            var videoUrl = 'https://www.youtube.com/embed/' + this.props.video.id.videoId;
            var videoInfo = this.props.video.snippet;

            return (
                <div class="media">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={videoUrl}></iframe>
                    </div>
                    <div class="media-body">
                        <h3 class="media-heading">{videoInfo.title}</h3>
                        <p>{videoInfo.description}</p>
                    </div>
                </div>
            )
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
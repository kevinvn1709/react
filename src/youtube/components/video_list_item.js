import React from 'react';
import _ from 'lodash';

export default class VideoListItem extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    render() {
        var video = this.props.video;
        var videoInfo = video.snippet;
        var videoId = video.videoId;
        return (
            <div class="media">
                <div class="media-left">
                    <a href="javascript:void(0)" onClick={() => this.props.onSelectedVideo(video) }>
                        <img class="media-object" src={videoInfo.thumbnails.default.url}/>
                    </a>
                </div>
                <div class="media-body">
                    <h5 class="media-heading">
                        <a href="javascript:void(0)"
                           onClick={() => this.props.onSelectedVideo(video) }>{videoInfo.title}</a>
                    </h5>
                    <small>{videoInfo.channelTitle}</small>
                    <p>{videoInfo.description}</p>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
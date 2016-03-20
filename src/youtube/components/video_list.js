import React from 'react';
import _ from 'lodash';
import VideoListItem from './video_list_item';

export default class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        if (this.props.videoList.length > 0) {
            return (
                <div class="list-group">
                    {
                        _.map(this.props.videoList, video => {
                            return <VideoListItem key={_.uniqueId()} video={video}
                                                  onSelectedVideo={this.props.onSelectedVideo}/>
                        })
                    }
                </div>
            )
        } else {
            return (
                <p>...</p>
            );
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeAPI from './services/youtube';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videoList: [],
            videoDetail: [],
        };
    }

    render() {
        return (
            <div>
                <SearchBar onChangeTerm={this.handleOnChange.bind(this)}/>
                <div class="row">
                    <div class="col-md-7">
                        <VideoDetail key={_.uniqueId()} video={this.state.videoDetail}/>
                    </div>
                    <div class="col-md-5">
                        <VideoList key={_.uniqueId()} videoList={this.state.videoList}
                                   onSelectedVideo={video => this.setState({videoDetail: video})}/>
                    </div>
                </div>
            </div>

        )
    }

    handleOnChange(term) {
        YoutubeAPI.search(term, response => {
            this.setState({
                videoList: response,
                videoDetail: response[0]
            });
        });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
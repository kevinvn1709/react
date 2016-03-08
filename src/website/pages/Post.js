import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.params.postId,
            post: {
                title: '',
                body: '',
            }
        }

    }

    render() {
        return (
            <div>
                <Header type="post" title={this.state.post.title}/>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <p>{this.state.post.body}</p>
                            <p>{this.state.post.body}</p>
                            <p>{this.state.post.body}</p>
                            <p>{this.state.post.body}</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        this.req = $.get("http://jsonplaceholder.typicode.com/posts/" + this.state.postId, item => {
            this.state.post = item;
            this.setState({post: this.state.post});
        });
    }

    componentWillUnmount() {
        this.req.abort();
    }
}
import React from 'react';
import { Link } from 'react-router';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import _ from 'lodash';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            {
                                _.map(this.state.posts, (post, id) => {
                                    return (
                                        <div key={_.uniqueId()}>
                                            <div class="post-preview">
                                                <Link to={"/post/" + post.id}>
                                                    <h2 class="post-title">
                                                        {post.title}
                                                    </h2>
                                                    <h3 class="post-subtitle">
                                                        {post.body}
                                                    </h3>
                                                </Link>
                                                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on
                                                    September
                                                    24,
                                                    2014</p>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                            <ul class="pager">
                                <li class="next">
                                    <a href="#">Older Posts &rarr;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        this.req = $.get("http://jsonplaceholder.typicode.com/posts?_start=0&_end=10", result => {
            _.map(result, item => {
                this.state.posts.push(item);
            })
            this.setState({posts: this.state.posts});
        });
    }

    componentWillUnmount() {

    }
}
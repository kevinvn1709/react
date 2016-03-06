import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div class="post-preview">
                                <a href="post.html">
                                    <h2 class="post-title">
                                        Man must explore, and this is exploration at its greatest
                                    </h2>
                                    <h3 class="post-subtitle">
                                        Problems look mighty small from 150 miles up
                                    </h3>
                                </a>
                                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
                            </div>
                            <hr></hr>
                            <div class="post-preview">
                                <a href="post.html">
                                    <h2 class="post-title">
                                        I believe every human has a finite number of heartbeats. I don't intend to waste
                                        any
                                        of mine.
                                    </h2>
                                </a>
                                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 18, 2014</p>
                            </div>
                            <hr></hr>
                            <div class="post-preview">
                                <a href="post.html">
                                    <h2 class="post-title">
                                        Science has not yet mastered prophecy
                                    </h2>
                                    <h3 class="post-subtitle">
                                        We predict too much for the next year and yet far too little for the next ten.
                                    </h3>
                                </a>
                                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</p>
                            </div>
                            <hr></hr>
                            <div class="post-preview">
                                <a href="post.html">
                                    <h2 class="post-title">
                                        Failure is not an option
                                    </h2>
                                    <h3 class="post-subtitle">
                                        Many say exploration is part of our destiny, but it’s actually our duty to
                                        future generations.
                                    </h3>
                                </a>
                                <p class="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
                            </div>
                            <hr></hr>
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

    }

    componentWillUnmount() {

    }
}
import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
        }
    }

    render() {
        var divStyleHome = {
            backgroundImage: "url('assets/img/home-bg.jpg')",
        };

        var divStyleAbout = {
            backgroundImage: "url('assets/img/about-bg.jpg')"
        };

        var divStyleContact = {
            backgroundImage: "url('assets/img/contact-bg.jpg')"
        };

        var divStylePost = {
            backgroundImage: "url('assets/img/post-bg.jpg')"
        };


        switch (this.state.type) {
            case 'contact':
                return (
                    <header class="intro-header" style={divStyleContact}>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div class="page-heading">
                                        <h1>Contact Me</h1>
                                        <hr class="small"></hr>
                                        <span class="subheading">Have questions? I have answers (maybe).</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )
                break;
            case 'about':
                return (
                    <header class="intro-header" style={divStyleAbout}>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div class="page-heading">
                                        <h1>About Me</h1>
                                        <hr class="small"></hr>
                                        <span class="subheading">This is what I do.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )
                break;
            case 'post':
                return (
                    <header class="intro-header" style={divStylePost}>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div class="post-heading">
                                        <h1>{this.props.title}</h1>
                                        <h2 class="subheading">{this.props.title}</h2>
                                    <span class="meta">Posted by <a href="#">Start
                                        Bootstrap</a> on August 24, 2014</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )
                break;
            default:
                return (
                    <header class="intro-header" style={divStyleHome}>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <div class="site-heading">
                                        <h1>Clean Blog</h1>
                                        <hr class="small"></hr>
                                        <span class="subheading">A Clean Blog Theme by Start Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )

        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }
}
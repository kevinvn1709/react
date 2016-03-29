import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllPosts} from '../action';
import {Link} from 'react-router';


class PostList extends React.Component {
    componentWillMount() {
        this.props.getAllPosts();
    }

    render() {
        return (
            <div>
                <Link to="/post/create">
                    <div class="btn btn-primary right">Create s1a new post</div>
                </Link>
                <hr />
                <ul class="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }

    renderPosts() {
        return (
            _.map(this.props.posts, post => {
                return (
                    <li key={_.uniqueId()} class="list-group-item">
                        <strong>{post.title}</strong>
                        <span class="pull-right">{post.categories}</span>
                    </li>
                )
            })
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllPosts}, dispatch)
}

function mapStateToProps(state) {
    return {
        posts: state.posts.all
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
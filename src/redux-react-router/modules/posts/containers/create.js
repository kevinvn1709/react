import React from 'react';

export default class PostCreate extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.props.refs);
    }

    render() {
        return (
            <form class="form-group" onSubmit={this.handleSubmit.bind(this)}>
                <div class="input-group">
                    <label>Title</label>
                    <input class="form-control" type="text" ref="title"/>
                </div>

                <div class="input-group">
                    <label>Category:</label>
                    <select class="form-control" refs="category">
                        <option>Music</option>
                        <option>Fashion</option>
                        <option>Food</option>
                        <option>Blog</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>Contentss:</label><br />
                    <textarea cols="30" rows="10" ref="content"></textarea>
                </div>
                <div class="input-group">
                    <button type="submit" class="btn btn-success">Create new Post</button>
                </div>
            </form>
        )
    }
}
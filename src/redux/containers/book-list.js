import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends React.Component {
    render() {
        return (
            <ul class="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book) => {
            return <li
                onClick={() => this.props.selectBook(book)}
                key={_.uniqueId()}
                class="list-group-item">{book.title}</li>
        });
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
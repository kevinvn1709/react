import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    render() {
        if(!this.props.book){
            return <div>Waiting....</div>
        }


        return (
            <div>
                {this.props.book.title} - {this.props.user.author}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook,
        user: state.user
    }
}

export default connect(mapStateToProps)(BookDetail);
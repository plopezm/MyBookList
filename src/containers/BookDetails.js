import React from 'react';
import { connect } from 'react-redux';

class BookDetails extends React.Component {
    render() {

        if(!this.props.book){
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>

                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// Whatever is returned will show up as props
// This function will be used by Redux to notify the global state of the application
function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetails);
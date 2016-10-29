import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {
    renderList(){
        return this.props.books.map((book) =>{
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}


// Whatever is returned will show up as props
// This function will be used by Redux to notify the global state of the application
function mapStateToProps(state){
    return {
        books: state.books
    };
}

// Whenever selectBook is called, the result shold be passed to all of our reducers
// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispath){
    return bindActionCreators({ selectBook: selectBook }, dispath);
}

// Promote BookList from a component to a container
// I needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
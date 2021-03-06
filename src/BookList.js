import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf.js'

/* import Shelf from './Shelf.js'
* @param {Object} books - Array of Books
*/

class BookList extends Component {

  render (){
    const books = this.props.books
    return(<div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={books.filter((book) => {
            return book.shelf === 'currentlyReading'
          })} updateBook={this.props.updateBook}/>
          <Shelf title="Want to Read" books={books.filter((book) => {
            return book.shelf === 'wantToRead'
          })} updateBook={this.props.updateBook}/>
          <Shelf title="Read" books={books.filter((book) => {
            return book.shelf === 'read'
          })} updateBook={this.props.updateBook}/>
        </div>
        <div className="open-search">
          <Link to='/search'>Add A Book</Link>
        </div>
      </div>
    </div>)
  }
}

export default BookList
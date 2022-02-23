import React, {Component} from 'react'
import Book from './Book.js'

/**
* @description Represents a shelf
* @constructor
* @param {Object} books - List of books
* @param {string} title - Title of the shelf
*/

class Shelf extends Component {

  render (){
    return(<div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => (
            <li className='book' key={book.id}>
            <Book book={book} updateBook={this.props.updateBook}/>
            </li>
          ))}
        </ol>
      </div>
    </div>)
  }
}

export default Shelf
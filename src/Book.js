import React, {Component} from 'react'

/**
* @description Represents a book
* @constructor
* @param {Object} book - Object representation of the book from the API
*/

class Book extends Component {
  bookShelfValue = (book) => {
    var value = 'none';
    if(book.hasOwnProperty('shelf')){
      value = book.shelf;
    } else {
      const b = this.props.books.filter((bk) => {return book.id === bk.id})
      if(b.length > 0){
        value = b[0].shelf;
      }
    }
    return value;
  }

  render (){
    const book = this.props.book
    return(
    <div className="book">
      <div className="book-top">
        {book.imageLinks &&
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")" }}></div>
        }
        <div className="book-shelf-changer">
          <select onChange={
            (event) => (
              this.props.updateBook(this.props.book, event.target.value)
            )
          }
          value={this.bookShelfValue(book)}
          >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
    )
  }
}

export default Book
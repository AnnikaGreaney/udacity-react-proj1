import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

/**
* @description Displays a Searchable List of Books
* @constructor
* @param {Object} books - List of Books
*/

class SearchList extends Component {
  state = {
    query: ""
  }

  updateQuery = (query) => {
    this.setState(()=>({
      query: query.trim()
    }))
    this.props.searchBooks(query)
  }

  render (){
    const books = this.props.books

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' onClick={(e) => this.updateQuery('')}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={(event) => (this.updateQuery(event.target.value))} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            
            {books.length > 0 && (books.map((book) => (
              <li key={book.id}>
              <Book book={book} updateBook={this.props.updateBook}/>
              </li>
            )))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchList
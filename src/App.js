import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router'
import BookList from './BookList'
import SearchList from './SearchList'

class BooksApp extends React.Component {

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((bk) => {
      var index = this.state.books.findIndex(x => x.id === book.id)
      this.setState((currentState) => ({
        books: [...currentState.books.slice(0,index), Object.assign({}, currentState.books[index], {shelf: shelf}), ...currentState.books.slice(index+1)]
      }))
    })
  }

  searchBooks = (query) => {
    if(query.length > 0){
      BooksAPI.search(query)
      .then((results) => {
        this.setState(() => {
          return {results: results}
        })
      })
    } else {
      this.setState(() => {
        return {results: []}
      })
    }
  }

  state = {
    books: [],
    results: []
  }

  render() {
    return (
      <div className="app">
        <Routes>
        <Route exact path='/search' element={<SearchList books={this.state.books} results={this.state.results} searchBooks={this.searchBooks} updateBook={this.updateBook}/>}></Route>
        <Route path='/' element={<BookList books={this.state.books} updateBook={this.updateBook}/>}></Route>
        </Routes>
      </div>
    )
  }
}

export default BooksApp

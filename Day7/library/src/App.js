import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import LibInputs from './components/LibInputs'
import LibTable from './components/LibTable'

import {Book} from './models/Book'

export default function App() {

  const [books, setBooks] = useState([]);

  function onBookCreate(title,author,isbn) {
    const book = new Book(title,author,isbn);
    setBooks([...books, book]);
  }

  function onBookRemove(isbn) {
    //filter task with the id out
    setBooks(books.filter((book) => book.isbn !== isbn));
  }

  return (
    <div className='container m-5'>
      <div className='card card-body'>
        <h1 className='text-center'>Library Log</h1>
        <LibInputs onBookCreate={onBookCreate}/>
        <LibTable onBookRemove={onBookRemove} books={books}/>
      </div>
    </div>
  )
}


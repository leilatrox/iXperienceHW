import React from 'react'

export default function LibTable(props) {
  return (
    <div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN#</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) =>
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td> 
                <div onClick={(e) => props.onBookRemove(book.isbn)}>
                  <i className="bi bi-trash"></i>  
                </div>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

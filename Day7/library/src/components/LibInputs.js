import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function LibInputs(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();

    props.onBookCreate(title,author,isbn);
    setTitle('');
    setAuthor('');
    setISBN('');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label claclassNamess="form-label">Author</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN#</label>
          <input value={isbn} onChange={(e) => setISBN(e.target.value)} type="text" className="form-control"/>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-outline-primary">Add Book</button>
        </div>
      </form>
    </div>
  )
}

import React, { useState } from 'react';
import Entry from './components/Entry'


function App() {
  

  return (<div className='container my-5'>
    <div className='card p-4'>
      <h1 className="text-center">Library</h1>
      <form>
        <Entry name="Title" in='titleIn'/>
        
        <div className="d-grid gap-2 mt-2">
          <button type="submit" className="btn btn-outline-primary">Add Book</button>
        </div>
      </form>
      
      <table class="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table">
          
        </tbody>
      </table>
    </div>

  </div>);
}

export default App;
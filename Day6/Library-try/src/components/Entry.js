import React, { useState } from 'react';


function Entry(props) {
    function useInput({ type: type }) {
        const [value, setValue] = useState("");
        const input = <input value={value} className ='form-control' onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
      }

    function removeBook(id) {

    }
    
    const [Title, titleIn] = useInput({type:'text'});
    const [Author, authorIn] = useInput({type:'text'});
    const [ISBN, isbnIn] = useInput({type:'text'});
    
    function createRow(title, author, isbn) {
        <tr>
        <td>{titleIn}</td>
        <td>{authorIn}</td>
        <td>{isbnIn}</td>
        <td>
            <button className='btn btn-danger btn-sm' onClick={this.removeRow}>X</button>
        </td>
    </tr>
    }
    
    return (
        <div class="mb-3">
            <label className="form-label">Title</label> <br/>
            {titleIn}
            <label className="form-label">Author</label> <br/>
            {authorIn}
            <label className="form-label">ISBN#</label> <br/>
            {isbnIn}
        </div>
        
        //{createRow({titleIn}, {authorIn}, {isbnIn})}
    );
}

export default Entry;
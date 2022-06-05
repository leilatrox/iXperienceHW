class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.title = document.getElementById('titlein');
        this.author = document.getElementById('authorin');
        this.isbn = document.getElementById('isbnin');
        this.table = document.getElementById('table');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

        this.books = [];
    }

    onFormSubmit(e) {
        e.preventDefault();
        const book = new Book (
            this.title.value, 
            this.author.value, 
            this.isbn.value
        )
        this.books.push(book);

        this.renderTable();
    }

    /*
    <tr>
        <td>title</td>
        <td>author</td>
        <td>isbn</td>
        <td>action</td>
    </tr>
    */
    renderTable() {
        this.table.innerHTML = [];
        for(let i = 0; i < this.books.length; i++) {
            const book = this.books[i];

            const tr = document.createElement('tr');
            const tdtitle = document.createElement('td');
            const tdauthor = document.createElement('td');
            const tdisbn = document.createElement('td');
            const tdact = document.createElement('td');
            
            tdtitle.innerHTML = book.title;
            tdauthor.innerHTML = book.author;
            tdisbn.innerHTML = book.isbn;
            tdact.innerHTML = '';

            tr.appendChild(tdtitle);
            tr.appendChild(tdauthor);
            tr.appendChild(tdisbn);
            tr.appendChild(tdact);

            this.table.appendChild(tr);

        }
    }

    removeBook(isbn) {
        this.books = this.books.filter((book) => {
            return book.isbn != isbn;
        })
        this.renderTable;
    }
}

const ui = new UI();
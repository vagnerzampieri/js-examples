class El {
  // create a function to get the element
  static selector(selector) {
    return document.querySelector(selector);
  }

  // create a function to get the value of the element
  static selectorValue(selector) {
    return this.selector(selector).value;
  }
}

// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = El.selector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');

    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = El.selector('.container');
    const form = El.selector('#book-form');

    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => El.selector('.alert').remove(), 3000);
  }

  static clearFields() {
    El.selector('#title'  ).value = '';
    El.selector('#author').value = '';
    El.selector('#isbn').value = '';
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    if (localStorage.getItem('books') === null) {
      return [];
    }

    // JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    return JSON.parse(localStorage.getItem('books'));
  }

  static addBook(book) {
    // get the books from the local storage
    const books = Store.getBooks();

    // push the book to the books array
    books.push(book);

    // set the books to the local storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    // get the books from the local storage
    const books = Store.getBooks();

    // loop through the books
    books.forEach((book, index) => {
      // check if the isbn is equal to the book isbn
      if (book.isbn === isbn) {
        // remove the book from the books array
        books.splice(index, 1);
      }
    });

    // set the books to the local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
El.selector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = El.selectorValue('#title');
  const author = El.selectorValue('#author');
  const isbn = El.selectorValue('#isbn');

  // Validate
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
    return;
  }

  // Instatiate book
  const book = new Book(title, author, isbn);

  // Add Book to UI
  UI.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Show success message
  UI.showAlert('Book Added', 'success');

  // Clear fields
  UI.clearFields();
});

// Event: Remove a Book
El.selector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed', 'success');
});

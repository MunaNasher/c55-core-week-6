// Place here the file operation functions for loading and saving books
module.exports = {
  loadBooks,
  saveBooks,
  addBook,
  getUnreadBooks,
  getBooksByGenre,
  markAsRead,
  getTotalBooks,
  hasUnreadBooks,
  printAllBooks,
  printSummary,
};

const fs = require('fs');
function loadBooks() {
  try {
    const dataBuffer = fs.readFileSync('books.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

function saveBooks(books) {
  try {
    const dataJSON = JSON.stringify(books, null, 2);
    fs.writeFileSync('books.json', dataJSON);
  } catch (error) {
    console.log('❌ Error saving data:', error.message);
  }
}

function addBook(book) {
  const books = loadBooks();
  books.push(book);
  saveBooks(books);
  console.log(`✅ The book "${book.title}" was added successfully!`);
}

function getUnreadBooks() {
  const books = loadBooks();
  return books.filter((book) => !book.read);
}

function getBooksByGenre(genre) {
  const books = loadBooks();
  return books.filter((book) => book.genre === genre);
}

function markAsRead(id) {
  const books = loadBooks();

  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return { ...book, read: true };
    }
    return book;
  });

  saveBooks(updatedBooks);
}

function getTotalBooks() {
  const books = loadBooks();
  return books.length;
}

function hasUnreadBooks() {
  const books = loadBooks();
  return books.some((book) => !book.read);
}

const chalk = require('chalk');
function printAllBooks() {
  const books = loadBooks();

  books.forEach((book) => {
    const status = book.read ? chalk.green('✓ Read') : chalk.yellow('⚠ Unread');

    console.log(
      chalk.cyan(book.title),
      'by',
      book.author,
      `(${book.genre})`,
      status
    );
  });
}

function printSummary() {
  const books = loadBooks();

  const total = books.length;
  const read = books.filter((book) => book.read).length;
  const unread = total - read;

  console.log(chalk.bold('\n📊 SUMMARY 📊'));
  console.log('Total Books:', total);
  console.log('Read:', read);
  console.log('Unread:', unread);
}

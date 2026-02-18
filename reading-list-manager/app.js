const {
  printAllBooks,
  printSummary,
  getUnreadBooks,
  getBooksByGenre,
  markAsRead,
  addBook,
} = require('./readingList.js'); // تأكدي من المسار صحيح

// This is the entrypoint for your application.
// node app.js

// TODO: Implement the main application logic here
// 1. Load books on startup
// 2. Display all books
// 3. Show summary statistics
// 4. Add example of filtering by genre or read/unread status
// 5. Add example of marking a book as read

console.log('📚 MY READING LIST 📚\n');

printAllBooks();

printSummary();

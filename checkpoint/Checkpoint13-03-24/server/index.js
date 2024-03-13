const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let books = [
  { id: 1, title: "Clean Code: A Handbook of Agile Software Craftsmanship", author: "Robert C. Martin", year: 2008 },
  { id: 2, title: "The Pragmatic Programmer: Your Journey to Mastery", author: "Andrew Hunt, David Thomas", year: 1999 },
  { id: 3, title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", year: 1994 },
  { id: 4, title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", year: 1990 },
  { id: 5, title: "Code Complete: A Practical Handbook of Software Construction", author: "Steve McConnell", year: 1993 },
  { id: 6, title: "Refactoring: Improving the Design of Existing Code", author: "Martin Fowler", year: 1999 },
  { id: 7, title: "The Mythical Man-Month: Essays on Software Engineering", author: "Frederick P. Brooks Jr.", year: 1975 },
  { id: 8, title: "Cracking the Coding Interview: 189 Programming Questions and Solutions", author: "Gayle Laakmann McDowell", year: 2008 },
  { id: 9, title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson, Gerald Jay Sussman", year: 1984 },
  { id: 10, title: "Programming Pearls", author: "Jon Bentley", year: 1986 }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const bookIndex = books.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { id: bookId, title, author, year };
    res.json(books[bookIndex]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
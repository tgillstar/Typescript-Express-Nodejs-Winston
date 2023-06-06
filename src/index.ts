// Create a new file called `index.ts`

import express from 'express';
import dotenv from 'dotenv';

const logger = require("./logger");

dotenv.config();

const app = express();

/*
PORT could be set via environment variable.
Fallback to your desired PORT.
*/
const PORT = process.env.PORT ?? 3000;
 // Get the list of books from a database or other data source
 const books = [
  {
    id: 111,
    title: 'The Book Thief',
    author: 'Markus Zusak',
    year: 2005
  },
  {
    id: 112,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
  },
  {
    id: 113,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954
  }
];

// Create a new route that will return the current time
app.get('/', (req, res) => {
  res.send(new Date());
});

// Create a new route that will return a list of books
app.get('/books', (req, res) => {
  // Send the list of books to the client
  res.send(books);
});

// Create a new route that will return a single book
app.get('/books/:id', (req, res) => {
  // Get the id of the book from the request
  const id = parseInt(req.params.id);

  // Get the book from a database or other data source
  const book = books.find(book => book.id === id);

  // Send the book to the client
  res.send(book);
});

app.listen(PORT, () => {
  if (process.env?.NODE_ENV !== "production") 
    logger.info(`Server is listening at http://localhost:$(PORT)`);
});
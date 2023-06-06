"use strict";
// Create a new file called `index.ts`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger = require("./logger");
dotenv_1.default.config();
const app = (0, express_1.default)();
/*
PORT could be set via environment variable.
Fallback to your desired PORT.
*/
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
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
    var _a;
    if (((_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) !== "production")
        logger.info(`Server is listening at http://localhost:$(PORT)`);
});
//# sourceMappingURL=index.js.map
import express from "express";
import "dotenv/config";

const app = express();

let books = [
  { id: 1, title: "1984", author: "George Orwell", pages: 328 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 234,
  },
];

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  if (!newBook.title || !newBook.author || !newBook.pages) {
    return res.status(400).json({ message: "Invalid book data" });
  }
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  book.title = req.body.title;
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

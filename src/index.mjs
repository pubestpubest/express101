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
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 },
  { id: 7, title: "Fahrenheit 451", author: "Ray Bradbury", pages: 194 },
  { id: 8, title: "Jane Eyre", author: "Charlotte Brontë", pages: 500 },
  { id: 9, title: "Moby-Dick", author: "Herman Melville", pages: 635 },
  { id: 10, title: "Brave New World", author: "Aldous Huxley", pages: 268 },
  { id: 11, title: "Wuthering Heights", author: "Emily Brontë", pages: 400 },
  { id: 12, title: "Animal Farm", author: "George Orwell", pages: 112 },
  { id: 13, title: "The Odyssey", author: "Homer", pages: 541 },
  { id: 14, title: "The Iliad", author: "Homer", pages: 683 },
  {
    id: 15,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    pages: 671,
  },
  { id: 16, title: "War and Peace", author: "Leo Tolstoy", pages: 1225 },
  {
    id: 17,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    pages: 254,
  },
  { id: 18, title: "Frankenstein", author: "Mary Shelley", pages: 280 },
  { id: 19, title: "Dracula", author: "Bram Stoker", pages: 418 },
  {
    id: 20,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
  },
  { id: 21, title: "The Alchemist", author: "Paulo Coelho", pages: 208 },
  { id: 22, title: "The Road", author: "Cormac McCarthy", pages: 287 },
  {
    id: 23,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: 489,
  },
  { id: 24, title: "Les Misérables", author: "Victor Hugo", pages: 1463 },
  { id: 25, title: "Don Quixote", author: "Miguel de Cervantes", pages: 1072 },
  { id: 26, title: "The Divine Comedy", author: "Dante Alighieri", pages: 798 },
  {
    id: 27,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    pages: 824,
  },
  {
    id: 28,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    pages: 464,
  },
  { id: 29, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", pages: 275 },
  { id: 30, title: "Catch-22", author: "Joseph Heller", pages: 453 },
  { id: 31, title: "Beloved", author: "Toni Morrison", pages: 324 },
  {
    id: 32,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    pages: 127,
  },
  { id: 33, title: "Middlemarch", author: "George Eliot", pages: 880 },
  { id: 34, title: "The Kite Runner", author: "Khaled Hosseini", pages: 371 },
  {
    id: 35,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    pages: 384,
  },
  { id: 36, title: "Memoirs of a Geisha", author: "Arthur Golden", pages: 448 },
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

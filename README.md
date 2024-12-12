# Express Books API

A simple RESTful API for managing a collection of books built with Express.js.

## Features

- CRUD operations for books
- JSON-based responses
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- pnpm (or npm/yarn)
- .env file with PORT configuration

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd express-books-api
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory:

   ```plaintext
   PORT=3000
   ```

4. Start the server:
   ```bash
   pnpm start
   ```

## API Endpoints

### Get all books

`GET /books`
Returns a list of all books.

### Get a specific book

`GET /books/:id`
Returns a single book by ID.

### Create a new book

`POST /books`
Creates a new book. Required fields in request body:

- `title`: string
- `author`: string
- `pages`: number

### Update a book

`PUT /books/:id`
Updates a book's title. Required fields in request body:

- `title`: string

### Delete a book

`DELETE /books/:id`
Deletes a book by ID.

## Response Formats

### Success Responses

- `200`: Successful GET/PUT request
- `201`: Successful POST request
- `204`: Successful DELETE request

### Error Responses

- `400`: Invalid request body
- `404`: Book not found

## Example Book Object

```json
{
  "id": 1,
  "title": "1984",
  "author": "George Orwell",
  "pages": 328
}
```

## Development

To run the server in development mode:

```bash
pnpm dev
```

## License

MIT

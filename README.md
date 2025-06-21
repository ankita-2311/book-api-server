# 📚 Book API Server

A simple REST API built with Node.js, Express, and PostgreSQL to manage a book list.

---

## 🚀 Features

- Create a new book (POST)
- Retrieve all books (GET)
- Get book by ID (GET)
- Update a book (PUT)
- Delete a book (DELETE)

---

## ⚙️ Tech Stack

- Node.js
- Express
- PostgreSQL
- pgAdmin
- dotenv

---

## 🛠 Environment Variables

Create a `.env` file with the following content:

```env
PORT=5000
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=#Anku265482
PG_DATABASE=bookdb

## 📘 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| GET    | /api/books           | Get all books        |
| GET    | /api/books/:id       | Get book by ID       |
| POST   | /api/books           | Create new book      |
| PUT    | /api/books/:id       | Update existing book |
| DELETE | /api/books/:id       | Delete a book        |


# 📚 Book API Server

This is a Node.js-based RESTful API server for managing books and users. The project includes unit, integration, and API tests with **100% test coverage**.

---

## 🔌 API Endpoints

This API allows you to:

- `GET /users` – Get all users
- `POST /users` – Create a user
- `PUT /users/:id` – Update a user
- `DELETE /users/:id` – Delete a user

> 📌 Note: Add more routes as needed for `books` or other resources.

---

## 🧰 Tech Stack

| Layer       | Tech                              |
|-------------|-----------------------------------|
| Language    | JavaScript (Node.js)              |
| Framework   | Express.js                        |
| Database    | PostgreSQL                        |
| DB Client   | node-postgres (`pg`)              |
| Testing     | Jest, Supertest                   |
| In-Memory DB| mongodb-memory-server (for tests) |
| Env Config  | dotenv                            |

---

## 🚀 How to Run the App

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankita-2311/book-api-server.git
   cd book-api-server
   ## ✅ Test Strategy & Coverage

This project includes:

- ✅ **Unit Tests** – app logic
- ✅ **Integration Tests** – DB CRUD operations
- ✅ **API Tests** – endpoints via Supertest
- ✅ **Mocking** – with `mongodb-memory-server`
- ✅ **100% Test Coverage** – statements, branches, functions, and lines

### 📸 Coverage Report Screenshot

![Test Coverage Screenshot](screenshot/coverage.png)


   

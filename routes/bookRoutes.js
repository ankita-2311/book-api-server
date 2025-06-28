const express = require("express");
const router = express.Router();
const pool = require("../db");

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management API
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM books");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - year
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book added successfully
 */
router.post("/", async (req, res) => {
  const { title, author, year } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO books (title, author, year) VALUES ($1, $2, $3) RETURNING *",
      [title, author, year]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book updated
 *       404:
 *         description: Book not found
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;

  try {
    const result = await pool.query(
      "UPDATE books SET title = $1, author = $2, year = $3 WHERE id = $4 RETURNING *",
      [title, author, year, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: Book deleted
 *       404:
 *         description: Book not found
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM books WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted", book: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

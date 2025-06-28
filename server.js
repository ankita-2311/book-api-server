require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

// ✅ Swagger setup
const { swaggerUi, swaggerSpec } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

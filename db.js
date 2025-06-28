const { Pool } = require("pg");

const pool = new Pool({
  host: "pgdb",
  port: 5432,
  user: "postgres",
  password: "#Anku265482",
  database: "bookdb",
});

// Optional: Test the connection once
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ DB connection failed:", err.message);
  } else {
    console.log("✅ DB connected:", res.rows[0]);
  }
});

module.exports = pool; // ✅ Export the pool

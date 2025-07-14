import pkg from 'pg';
const { Pool } = pkg;
import { DATABASE_URL } from "./config.js";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

// Initialize database
(async () => {
  try {
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

export default pool;

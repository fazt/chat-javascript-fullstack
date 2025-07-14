import pkg from 'pg';
const { Pool } = pkg;
import { DATABASE_URL } from "./config.js";

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20, // maximum number of clients in the pool
  idleTimeoutMillis: 30000, // close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // return an error after 2 seconds if connection could not be established
});

// Initialize database
(async () => {
  try {
    // Test the connection
    const client = await pool.connect();
    client.release();
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

export default pool;

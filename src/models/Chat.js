import pool from '../database.js';

class Chat {
  static async find(options = {}) {
    const { limit = 8, sort = '-created' } = options;
    const orderBy = sort.startsWith('-') ? 'DESC' : 'ASC';
    const field = sort.startsWith('-') ? sort.substring(1) : sort;
    
    const query = `
      SELECT * FROM chats 
      ORDER BY ${field} ${orderBy} 
      LIMIT $1
    `;
    
    const result = await pool.query(query, [limit]);
    return result.rows;
  }

  static async save(data) {
    const { nick, msg } = data;
    const query = `
      INSERT INTO chats (nick, msg) 
      VALUES ($1, $2) 
      RETURNING *
    `;
    
    const result = await pool.query(query, [nick, msg]);
    return result.rows[0];
  }
}

export default Chat;

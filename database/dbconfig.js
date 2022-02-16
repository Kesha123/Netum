const { Pool } = require('pg')
const conn = require('./init.json');

const pool = new Pool({
  user: conn.user,
  host: conn.host,
  port: conn.port,
  database: conn.database,
  password: conn.password
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
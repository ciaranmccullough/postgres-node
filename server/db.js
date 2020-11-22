const Pool = require('pg').Pool;

const pool = new Pool({
  user: `${process.env.dbuser}`,
  password: `${process.env.dbpassword}`,
  host: 'localhost',
  port: 5432,
  database: `${process.env.database}`,
});

module.exports = pool;

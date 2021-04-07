const express = require('express');
const app = express();
const pool = require('../config/db');

app.get('/', async (req, res) => {
  res.send('hello world');  
});

app.get('/currencies', async (req, res) => {
  const query = await pool.query(`select * from currencies;`)
  delete query["meta"];
  return res.status(200).json({
    data: query
  });
});

app.use(require('../middleware/mainMiddleware'));


module.exports = app;

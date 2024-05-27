import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 5000;

const db = await mysql.createConnection({
  host: 'snapproject.cxiq8otkwko7.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'SNAPProjectTeam12',
  database: 'contactcard',
});

app.get('/api/data', (req, res) => {
  const query = 'show tables';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.get('/', function (req, res) {
  console.log('Hello');

  res.send('Hello, world');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

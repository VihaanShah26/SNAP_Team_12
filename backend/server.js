import express from 'express';
import mysql from 'mysql2/promise';
import { json } from 'stream/consumers';

const app = express();
app.use(express.json());
const port = 5000;

const pool = await mysql.createPool({
  host: 'snapproject.cxiq8otkwko7.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'SNAPProjectTeam12',
  database: 'contactcard',
});

app.get('/api/data', async (req, res) => {
  try {
    const query = 'select * from contacts;';
    const [rows, fields] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post('/api/addContact', async (req, res) => {
  try {
    const {
      relationship,
      meet,
      spend_time,
      current_interests,
      communication_frequency,
      helps_me,
      closest_city,
      friends,
      contact_name,
    } = req.body;
    const friendsString = friends.join(",");
    const query = `insert into contacts (contact_name, relationship, time_together, interests, val, frequency, meeting_context, city, other_ties) values ('${contact_name}', '${relationship}', '${spend_time}', '${current_interests}', '${helps_me}', '${communication_frequency}', '${meet}', '${closest_city}', '${friendsString}')`;
    const [rows, fields] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});
app.get('/api/getDistinctNames', async function (req, res) {
  try {
    const query = `select contact_name, other_ties from contacts;`;
    const [rows, fields] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});

app.get('/api', function (req, res) {
  console.log('Hello');

  res.json('Hello, world');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

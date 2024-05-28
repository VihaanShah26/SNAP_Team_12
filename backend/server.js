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
      username,
      contact_name,
      closest_friend1,
      closest_friend2,
      closest_friend3,
    } = req.body;
    const query = `insert into contacts (username, contact_name, relationship, spend_time, current_interests, helps_me, communication_frequency, meet, closest_city, closest_friend1, closest_friend2, closest_friend3)values ('${username}', '${contact_name}', '${relationship}', '${spend_time}', '${current_interests}', '${helps_me}', '${communication_frequency}', '${meet}', '${closest_city}', '${closest_friend1}', '${closest_friend2}', '${closest_friend3}')`;
    const [rows, fields] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
});
app.get('/api/getDistinctNames', async function (req, res) {
  try {
    const query = `select username as value from contacts union select closest_friend1 as value from contacts union select closest_friend2 as value from contacts union select closest_friend3 as value from contacts;`;
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

import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'snapproject.cxiq8otkwko7.us-east-2.rds.amazonaws.com',
  user: 'admin',
  database: 'SNAPproject',
  password: ' SNAPProjectTeam12',
});

export default connection;


import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';


const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


app.get('/', (req, res) => res.send('User Service'));

app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
});

app.listen(4001, () => {
  console.log('User Service running on port 4001');
});
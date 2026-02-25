import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('User Service'));

app.listen(4001, () => {
  console.log('User Service running on port 4001');
});
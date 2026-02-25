import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Payment Service'));

app.listen(4004, () => {
  console.log('Payment Service running on port 4004');
});
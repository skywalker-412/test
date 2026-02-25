import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Review Service'));

app.listen(4006, () => {
  console.log('Review Service running on port 4006');
});
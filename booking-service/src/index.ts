import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Booking Service'));

app.listen(4003, () => {
  console.log('Booking Service running on port 4003');
});
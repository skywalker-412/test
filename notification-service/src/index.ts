import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Notification Service'));

app.listen(4005, () => {
  console.log('Notification Service running on port 4005');
});
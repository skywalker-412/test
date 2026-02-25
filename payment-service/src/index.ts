import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Payment Service'));

app.listen(4004, () => {
  console.log('Payment Service running on port 4004');
});
import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Event Service'));

app.listen(4002, () => {
  console.log('Event Service running on port 4002');
});
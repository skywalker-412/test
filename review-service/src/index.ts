import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Review Service'));

app.listen(4006, () => {
  console.log('Review Service running on port 4006');
});
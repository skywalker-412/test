import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('User Service'));

app.listen(4001, () => {
  console.log('User Service running on port 4001');
});
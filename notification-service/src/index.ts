import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Notification Service'));

app.listen(4005, () => {
  console.log('Notification Service running on port 4005');
});
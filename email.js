import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 5001;

app.get('/', (req, res) => {
  const response_data = {
    checked: "true"
  }
  res.send(response_data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
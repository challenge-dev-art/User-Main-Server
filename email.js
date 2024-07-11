import express from "express";

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  const response_data = {
    checked: "true"
  }
  res.send(response_data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
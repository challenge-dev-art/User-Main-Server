import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: 'https://user-main.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  headers: ['Content-Type', 'Authorization'],
};

// Enable CORS for all routes
app.use(cors(corsOptions));

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
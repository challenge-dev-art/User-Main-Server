import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 5001;

const dailyCount = {}; // Initialize an empty object to store daily counts

app.get('/', (req, res) => {

  const date = new Date().toISOString().slice(0, 10); // Get the current date (YYYY-MM-DD)
  if (!dailyCount[date]) { // If the date is not in the object, add it with a count of 0
    dailyCount[date] = 0;
  }
  dailyCount[date]++; // Increment the count for the current date

  const response_data = {
    checked: "true",
    count: dailyCount[date],
    url: "https://www.salesforce.com/form/signup/freetrial-platform/?d=cta-glob-nav-1"
  };

  res.send(response_data);

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files like index.html

app.get('/leaderboard', async (req, res) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyKkuWb1yUQxEtuwlWSB50779xSiPYZx_wsEW6Q9wfXklnms_WNFrDMv78SMl7u9nlO/exec');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching leaderboard data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
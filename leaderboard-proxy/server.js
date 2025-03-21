const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files like index.html

app.get('/leaderboard', async (req, res) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbx3Np34tAANFL-5mwEMN7sMXAeuex7eyW-aVEgudz1on7vjb319yUkQHBA39iVM_aqb/exec');
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
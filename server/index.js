const express = require('express');
const cors = require('cors');
const app = express();

const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/dist/index.html"));
});

app.get('/data', (req, res) => {
  const data = {
    message: 'Hello from Node.js server!',
    timestamp: new Date().toISOString(),
    items: [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ]
  };
  res.json(data); // Sends the JavaScript object as a JSON response
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
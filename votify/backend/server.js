// Basic Node.js server for Votify

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// Serve home.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

// API Routes
app.post('/create-poll', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Poll created successfully' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// Basic Node.js server for Votify

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('frontend'));
app.use(express.json());

// API Routes
app.post('/create-poll', (req, res) => {
    console.log(req.body);
    res.send({ message: 'Poll created successfully' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

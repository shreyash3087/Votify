const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const filePath = path.join(__dirname, "polls.json");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));

// Serve home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/home.html"));
});

// Save poll data to JSON file
app.post("/savePoll", (req, res) => {
    let pollData = req.body;
    let existingPolls = [];

    if (fs.existsSync(filePath)) {
        existingPolls = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    existingPolls.push(pollData);
    fs.writeFileSync(filePath, JSON.stringify(existingPolls, null, 2));
    res.json({ message: "Poll saved successfully!" });
});

// Fetch poll questions for sidebar
app.get("/getPolls", (req, res) => {
    if (fs.existsSync(filePath)) {
        res.json(JSON.parse(fs.readFileSync(filePath, "utf8")));
    } else {
        res.json([]);
    }
});

// Handle all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/home.html"));
});

// Start server if not running as module
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
} else {
    module.exports = app;
}
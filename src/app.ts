const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Endpoint that responds with JSON data from a file
app.get('/data', (req, res) => {
    // Read the JSON data from a file
    fs.readFile('src/data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            const shouldThrowError = Math.random() < 0.5; // 20% chance of throwing an error
            if (shouldThrowError) {
                res.status(500).json({ error: 'Random backend error' });
            } else {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
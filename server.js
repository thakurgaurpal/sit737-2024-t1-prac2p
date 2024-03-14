const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the port number
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

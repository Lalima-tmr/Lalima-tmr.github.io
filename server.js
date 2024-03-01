const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: false }));

// Serve your static files
app.use(express.static('public'));

// Handle POST request to /send-message
app.post('/send-message', (req, res) => {
    // Access form data from the request body
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Replace this with actual code to handle the message on the server
    console.log(`Received message from ${name} (${email}): ${message}`);

    // Respond to the client
    res.send({ message: 'Message received successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

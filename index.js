const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8085;  // Port where the app will run

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Serve the Contact Us HTML page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form submissions from the Contact Us page
app.post('/submit-form', (req, res) => {
    const { myname, email, subject, message } = req.body;

    // Log form data to console (you can handle it however you like)
    console.log(`Name: ${myname}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    // Send a response back to the client
    res.send('Thank you for contacting us! We will get back to you soon.');
});

// Default route (for the homepage)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

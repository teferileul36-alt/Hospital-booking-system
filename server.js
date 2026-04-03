const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const FILE = 'bookings.json';

app.use(cors());
app.use(bodyParser.json());

// Get all bookings
app.get('/bookings', (req, res) => {
    if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]');
    const data = fs.readFileSync(FILE);
    res.json(JSON.parse(data));
});

// Add a new booking
app.post('/receptionist.html', (req, res) => {
    if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]');
    const data = fs.readFileSync(FILE);
    const bookings = JSON.parse(data);
    bookings.push(req.body);
    fs.writeFileSync(FILE, JSON.stringify(bookings, null, 2));
    res.json({status: 'success'});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

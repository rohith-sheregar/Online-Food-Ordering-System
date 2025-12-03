const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt with username: ${username} and password: ${password}`);
    res.json({ success: true, message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

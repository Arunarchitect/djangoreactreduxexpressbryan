const express = require('express');

const cors = require('cors');

const path = require('path');

require('dotenv').config();


const registerRoute = require('./routes/auth/register');

const app = express();

app.use(express.json())

app.use(cors());

app.use(express.static('client/dist'));
app.get('*', (req, res) => {
    const myPath = path.resolve(__dirname, 'client', 'dist', 'index.html');
    console.log('__dirname',__dirname);
    console.log('MyPath:',myPath);
    return res.sendFile(myPath);
});

const PORT = process .env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

// app.get('*', (req, res) => {
//     return res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
//     console.log('__dirname',__dirname);
// })
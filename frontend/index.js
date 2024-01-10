const express = require('express');

const path = require('path');

const app = express();

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
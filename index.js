const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

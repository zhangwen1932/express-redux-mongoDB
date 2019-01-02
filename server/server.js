const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Happy New Year'));
app.listen(2300, () => console.log('Example app listening on port 2300!'));

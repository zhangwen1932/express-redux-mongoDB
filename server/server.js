const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/v1/user', (req, rep) => {
  rep.send('hello');
});

app.listen(2300, () => console.log('Example app listening on port 2300!'));

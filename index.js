const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Api agencia 300'));

app.listen(3000);
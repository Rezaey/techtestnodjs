const path = require('path');
var cors = require('cors');
const express = require('express');

const mainRoutes = require('./routes/main');


const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);


app.listen(3000);
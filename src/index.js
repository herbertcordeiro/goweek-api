const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://herbert:admin123@ds157853.mlab.com:57853/goweek-back', {
    useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server on port 3000');
});
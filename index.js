const express = require('express');
const app = express();
const router = require('./routes/router.js');

app.use('/', router);

app.listen(3000, function(){
    console.log('server running port 3000');
});

module.exports = app;
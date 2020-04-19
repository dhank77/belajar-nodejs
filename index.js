const express = require('express');
const app = express();
const router = require('./routes/router.js');
// const userRouter = require('./routes/users.router.js');

app.use('/', router);

// app.use('/user', userRouter);

app.listen(3000, function(){
    console.log('server running port 3000');
});

module.exports = app;
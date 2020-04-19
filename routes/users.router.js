const router = require('express').Router();
const userController = require('../controller/users.controller.js');

router.get('/users', userController.getUsers);

router.post('/users', userController.addUsers);

router.put('/users', userController.updateUsers);

router.delete('/users', userController.deleteUsers);

module.exports = userRouter;


const express= require('express');
const {createUser, fetchData}= require('../handlers/user');

const userRouter = express.Router();
userRouter.get('/users', fetchData)
userRouter.post('/newUser', createUser)




module.exports = userRouter
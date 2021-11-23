const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const middlewareGlobal=require('../middlewares/globalMiddleware.js')
const Tokencheck= middlewareGlobal.tokenCheck;

router.post('/users',UserController.createUser);
router.post('/login',UserController.loginUser)

router.get('/users/:userId',Tokencheck,UserController.getDataByToken)
router.put('/users/:userId',Tokencheck,UserController.updateUser)
module.exports = router;
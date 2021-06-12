var express = require('express');
var router = express.Router();
var checkAuth=require('./middleware/auth')
var userController=require('./controller/userController')
router.get('/fetchuser',checkAuth,userController.fetchUser)
router.post('/adduser',checkAuth,userController.addUser)
router.delete('/deleteuser/:id',checkAuth,userController.deleteUser)
router.post('/login',userController.userLogin)
router.post('/updateuser',checkAuth,userController.updateUser)
module.exports=router;

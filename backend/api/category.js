var express = require('express');
var router = express.Router();
var checkAuth=require('./middleware/auth')
var categoryController=require('./controller/categoryController')
router.get('/fetchallcategory',checkAuth,categoryController.fetchallCategory)
router.get('/fetchcategory',checkAuth,categoryController.fetchCategory)
router.post('/addcategory',checkAuth,categoryController.addCategory)
router.delete('/deletecategory/:id',checkAuth,categoryController.deleteCategory)
router.post('/updatecategory',checkAuth,categoryController.updateCategory)
module.exports=router;
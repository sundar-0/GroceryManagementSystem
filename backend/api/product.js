var express = require('express');
var router = express.Router();
var checkAuth=require('./middleware/auth')
var productController=require('./controller/productController')
router.get('/fetchproduct',checkAuth,productController.fetchProduct)
router.post('/addproduct',checkAuth,productController.addProduct)
router.delete('/deleteproduct/:id',checkAuth,productController.deleteProduct)
router.post('/updateproduct',checkAuth,productController.updateProduct)
module.exports=router;
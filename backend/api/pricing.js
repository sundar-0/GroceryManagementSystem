var express = require('express');
var router = express.Router();
var checkAuth=require('./middleware/auth')
var pricingController=require('./controller/pricingController')
router.post('/addpricing',checkAuth,pricingController.addPrice)
router.get('/fetchpricing',checkAuth,pricingController.fetchPricing)
router.delete('/deletepricing/:id',checkAuth,pricingController.deletePricing)
router.post('/updatepricing',checkAuth,pricingController.updatePricing)
module.exports=router;

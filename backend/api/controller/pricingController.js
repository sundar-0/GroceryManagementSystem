var pricingModule=require('../../Modules/pricingModule')
exports.addPrice=function(req,res,next){
    product_name=req.body.productName
    buying_pricing=parseInt(req.body.buyingPrice)
    profit_margin=parseInt(req.body.profitMargin)
    discount=parseInt(req.body.Discount)
    final_sp=Math.ceil(buying_pricing+buying_pricing*profit_margin/100-buying_pricing*discount/100)
    console.log(product_name,buying_pricing,profit_margin,discount,final_sp)
    var pricing=new pricingModule({
        product_name:product_name,
        buying_price:buying_pricing,
        profit_margin:profit_margin,
        discount:discount,
        final_sp:final_sp
    })
        pricing.save()
        .then(data=>{
        res.json({
        'message':`Pricing Added on the ${product_name} Successfully`,
        'result':data
            })
            })
        .catch(err=>{
        res.json(err)
            })
}

exports.fetchPricing=function(req,res,next){
    pricingModule.find({},function(err,data){
        if(err){
            res.json(err)
        }
		res.status(200).json({
			'message':'success',
			'result':data
		})
	})
}

exports.deletePricing=function(req,res,next){
    id=req.params.id
    pricingModule.findByIdAndDelete({_id:id})
    .then(data=>{
      res.json({
          'message':'Pricing Deleted Successfully',
          'result':data
      })
    })
}

exports.updatePricing=function(req,res,next){
    id=req.body._id,
    product_name=req.body.product_name,
    buying_price=parseInt(req.body.buying_price),
    profit_margin=parseInt(req.body.profit_margin),
    discount=parseInt(req.body.discount)
    final_sp=Math.ceil(buying_price+buying_price*profit_margin/100-buying_price*discount/100)
    if(product_name!==''&&buying_price!==''&&profit_margin!==''&&discount!=='')
    pricingModule.findOneAndUpdate({_id:id},{$set:{product_name:product_name,buying_price:buying_price,profit_margin:profit_margin,discount:discount,final_sp:final_sp}})
        .then(data=>{
            res.json({
                'message':'Pricing Updated Successfully',
                'result':data
            })
        })
    
}

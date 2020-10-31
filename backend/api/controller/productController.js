var productModule=require('../../Modules/productModule')
exports.fetchProduct=function(req,res,next){
    productModule.find({},function(err,data){
		res.status(200).json({
			'message':'success',
			'result':data
		})
	})	
}
exports.addProduct=function(req,res,next){
    productname=req.body.productName
    dateofmfg=req.body.dateMfg
	dateofexpiry=req.body.dateExpiry
    category=req.body.catName
    var product=new productModule({
        productname:productname,
        dateofmfg:dateofmfg,
        dateofexpiry:dateofexpiry,
        category:category
    })
        product.save()
        .then(data=>{
        res.json({
        'message':'Product Added Successfully',
        'result':data
            })
            })
        .catch(err=>{
        res.json(err)
            })
}
exports.deleteProduct=function(req,res,next){
        id=req.params.id
        productModule.findByIdAndDelete({_id:id})
        .then(data=>{
          res.json({
              'message':'product Deleted Successfully',
              'result':data
          })
        })
}
exports.updateProduct=function(req,res,next){
    id=req.body._id,
    productname=req.body.productname,
    dateofmfg=req.body.dateofmfg,
    dateofexpiry=req.body.dateofexpiry,
    category=req.body.category
    if(productname!==''&&dateofmfg!==''&&dateofexpiry!=='')
    productModule.findOneAndUpdate({_id:id},{$set:{productname:productname,dateofmfg:dateofmfg,dateofexpiry:dateofexpiry,category:category}})
        .then(data=>{
            res.json({
                'message':'product Updated Successfully',
                'result':data
            })
        })
    
}
var productModule=require('../../Modules/productModule')
var mongoose=require('mongoose')
exports.fetchProduct=function(req,res,next){
    productModule.find()
    .select("_id productname dateofmfg dateofexpiry category productstatus")
    .populate("category")
    .exec()
    .then(
        data=>{
        result=data.filter((item)=>{
        return item['category']['category_status']==='Active'
        })
        res.status(200).json({
        'message':'success',
        'result':result
         })
        }  
    )
	
}
exports.addProduct=function(req,res,next){
    console.log(typeof(req.body))
    productname=req.body.productName
    dateofmfg=req.body.dateMfg
	dateofexpiry=req.body.dateExpiry
    category=req.body.catName
    productstatus=req.body.productStatus
    var product=new productModule({
        _id:mongoose.Types.ObjectId(),
        productname:productname,
        dateofmfg:dateofmfg,
        dateofexpiry:dateofexpiry,
        category:category,
        productstatus:productstatus
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
    productname=req.body.productname
    dateofmfg=req.body.dateofmfg
    dateofexpiry=req.body.dateofexpiry
    category=req.body.category
    productstatus=req.body.productstatus
    if(productname!==''&&dateofmfg!==''&&dateofexpiry!==''&&productstatus!=='')
    productModule.findOneAndUpdate({_id:id},{$set:{productname:productname,dateofmfg:dateofmfg,dateofexpiry:dateofexpiry,category:category,productstatus:productstatus}})
        .then(data=>{
            res.json({
                'message':'product Updated Successfully',
                'result':data
            })
        })
    
}
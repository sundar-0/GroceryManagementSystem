var categoryModule=require('../../Modules/categoryModule')
exports.fetchallCategory=function(req,res,next){
    categoryModule.find({},function(err,data){
		res.status(200).json({
			'message':'success',
			'result':data
		})
	})	
}
exports.fetchCategory=function(req,res,next){
    categoryModule.find({category_status:'Active'},{categoryname:1},function(err,data){
		res.status(200).json({
			'message':'success',
			'result':data
		})
	})	
}
exports.addCategory=function(req,res,next){
    categoryname=req.body.categoryName
    category_status=req.body.categoryStatus
    var category=new categoryModule({
        categoryname:categoryname,
        category_status:category_status
    })
        category.save()
        .then(data=>{
        res.json({
        'message':'Category Added Successfully',
        'result':data
            })
            })
        .catch(err=>{
        res.json(err)
            })
}
exports.deleteCategory=function(req,res,next){
        id=req.params.id
        categoryModule.findByIdAndDelete({_id:id}).then(data=>{
          res.json({
              'message':'Category Deleted Successfully',
              'result':data
          })
        })
}
exports.updateCategory=function(req,res,next){
    id=req.body._id,
    categoryname=req.body.categoryname,
    category_status=req.body.category_status
    if(categoryname!==''&&category_status!=='')
    categoryModule.findOneAndUpdate({_id:id},{$set:{categoryname:categoryname,category_status:category_status}})
        .then(data=>{
            res.json({
                'message':'Category Updated Successfully',
                'result':data
            })
        })
    
}
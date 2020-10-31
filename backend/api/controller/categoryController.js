var categoryModule=require('../../Modules/categoryModule')
exports.fetchCategory=function(req,res,next){
    categoryModule.find({category_status:'Active'},{_id:0,categoryname:1},function(err,data){
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

}
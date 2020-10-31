var userModule=require('../../Modules/userModule')
var bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
require('dotenv').config()
var secretKey=process.env.SECRET_KEY
exports.fetchUser=function(req,res,next){
	userModule.find({},function(err,data){
		res.status(200).json({
			'message':'success',
			'result':data
		})
	})	
}
exports.addUser=function(req,res,next){
	username=req.body.username
	email=req.body.email
	password=req.body.password
	cpassword=req.body.cpassword
	if(password!==cpassword){
		res.json({
			'message':'Password Donot Match',
			})
	}
	else{
		bcrypt.hash(password,10,function(err,hash){
			if(err) return res.json({
				message:'something wrong!!',
			    error:err
		})
			else
			{	
			var user=new userModule({
					username:username,
					email:email,
					password:hash
				})
			 user.save()
			.then(data=>{
			res.json({
			'message':'User Registered Successfully',
			'result':data
				})
				})
			.catch(err=>{
			res.json(err)
				})
			}
		})
}
}
exports.deleteUser=function(req,res,next){
    var id=req.params.id;
    userModule.findByIdAndDelete({_id:id})
    .then(data=>{
        res.json({
            'message':'user Deleted Successfully',
            'result':data
        })
    })
}
exports.userLogin=function(req,res,next){
	username=req.body.username
	password=req.body.password
	userModule.find({username:username})
	.exec()
	.then(user=>{
		if(user.length<1){
			res.json({
				message:"Authentication failed"
			})
		}
		else{
			bcrypt.compare(req.body.password, user[0].password, function(err, result) {
				if(err)
				res.json({
					message:"Authentication failed"
				})
				if(result){
					var token=jwt.sign({username:user[0].username,userid:user[0]._id},secretKey,{expiresIn:'1h'})
					res.status(201).json({
						message:"user found",
						token:token
					})
				}
				else{
					res.json({
						message:"Authentication failed"
					})
				}
			});
	}
	})
	.catch(err=>{
		res.json({
			error:err
		})
	})
}
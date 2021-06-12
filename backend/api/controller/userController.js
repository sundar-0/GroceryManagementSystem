var userModule=require('../../Modules/userModule')
var bcrypt=require('bcrypt')
var jwt=require('jsonwebtoken')
require('dotenv').config()
var secretKey=process.env.SECRET_KEY
exports.fetchUser=function(req,res,next){
	// userModule.find({}).where('status','Active')
	userModule.find({})
	.exec()
	.then((data)=>{
		res.status(200).json({
		'message':'success',
		'result':data
		})
	})
}

exports.addUser=function(req,res,next){
	username=req.body.userName
	email=req.body.userEmail
	password=req.body.userPassword
	cpassword=req.body.userCpassword
	status=req.body.userStatus
	if(username===''||email===''||password===''||cpassword===''||status===''){
		res.json({
			'message':'All Fields Are Mandatory!!!'
		})
	}
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
					password:hash,
					status:status
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
	username=req.body.userName
	password=req.body.userPassword
	userModule.find({username:username}).and({status:'Active'})
	.exec()
	.then(user=>{
		if(user.length<1){
			res.json({
				message:"Authentication failed"
			})
		}
		else{
			bcrypt.compare(req.body.userPassword, user[0].password, function(err, result) {
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

exports.updateUser=function(req,res,next){
    id=req.body._id,
    username=req.body.username,
	email=req.body.email,
	status=req.body.status
    userModule.findOneAndUpdate({_id:id},{$set:{username:username,email:email,status:status}})
        .then(data=>{
            res.json({
                'message':'User Updated Successfully',
                'result':data
            })
        })
    
}
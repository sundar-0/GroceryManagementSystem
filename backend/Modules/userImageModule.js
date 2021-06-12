var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
var conn=mongoose.Collection;
var userImageSchema=new mongoose.Schema({
    image_name:{
        type:String,
    },
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'users',required:true},
    image_url:{
        type:String
    }
})
var userImageModel=mongoose.model('userimages',userImageSchema)
module.exports=userImageModel
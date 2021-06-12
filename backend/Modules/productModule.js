var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
var conn=mongoose.Collection;
var productSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    productname:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    dateofmfg:{type:Date},
    dateofexpiry:{type:Date},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'categories',required:true},
    productstatus:{
        type:String
    }
})
var productModel=mongoose.model('products',productSchema)
module.exports=productModel
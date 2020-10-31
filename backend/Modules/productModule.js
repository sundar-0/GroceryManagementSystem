var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
var conn=mongoose.Collection;
var productSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    dateofmfg:{type:Date},
    dateofexpiry:{type:Date},
    category:{
        type:String,
        required:true
    }
})
var productModel=mongoose.model('products',productSchema)
module.exports=productModel
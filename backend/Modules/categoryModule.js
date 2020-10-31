var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
var conn=mongoose.Collection;
var categorySchema=new mongoose.Schema({
    categoryname:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    category_status:{
        type:String,
        required:true
    }
})
var categoryModel=mongoose.model('categories',categorySchema)
module.exports=categoryModel
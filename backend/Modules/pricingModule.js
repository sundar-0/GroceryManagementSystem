var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
var conn=mongoose.Collection;
var pricingSchema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        index:{
            unique:true
        }
    },
    buying_price:{
        type:Number
    },
    profit_margin:{
        type:Number
    },
    discount:{
        type:Number
    },
    final_sp:{
        type:Number
    }
})
var pricingModel=mongoose.model('pricings',pricingSchema)
module.exports=pricingModel
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser')
var app = express();
const port=5000
/*creating Api*/
var userapi=require('./api/user')
var productapi=require('./api/product')
var categoryapi=require('./api/category')
var pricingapi=require('./api/pricing')
var userimageapi=require('./api/userimage')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();

  });
app.use('/api/user',userapi)
app.use('/api/product',productapi)
app.use('/api/category',categoryapi)
app.use('/api/pricing',pricingapi)
app.use('/api/userimage',userimageapi)

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
module.exports = app;

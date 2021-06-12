var express = require('express');
var router = express.Router();
var multer=require('multer')
var checkAuth=require('./middleware/auth')
var userimageController=require('./controller/userimageController')
var storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname )
    }
  })
  const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/png'||file.mimetype==='image/jpg'||file.mimetype==='image/jpeg')
    {
        cb(null,true)
    }
    else
    {
        cb(null,false)
    }
  }
  var upload = multer({ storage:storage,
limits:{
    fileSize:1024*1024*5
        },
fileFilter:fileFilter
     })
router.post('/uploadimage',upload.single('file'),checkAuth,userimageController.uploadImage)
router.get('/fetchimage/:id',checkAuth,userimageController.fetchProfileImage)

module.exports=router;




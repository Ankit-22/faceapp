var express=require('express');
var user=require('../models/user_model.js');
var router=express.Router();

router.get('/users/:id',function(req,res,next){
		user.getAll(req.pool,(err,data)=>{
if(err)
	throw err;
			res.render("showusers.handlebars",{user:data});
		});

});
// router.post('')

module.exports=router;
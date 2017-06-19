var chatDetails=require('../models/chat_details_model');
var router=require('express').Router();

router.get('/home',require('../middlewares/authenticate'),function(req,res){						
	chatDetails.getAllByUser(req.pool,req.session.id,(err,data)=>{
			
			if(err){ 	
				console.log(err);
				res.status(503).render('503.handlebars');			
			}
			else{
				let obj={};
				obj.title="dashboard";
			obj.username=req.session.username;
			res.render('chatscreen.handlebars',obj); 
		}
	});
});
	
module.exports=router;
var express=require('express');
var user = require('../models/user_model.js');
var blocks = require('../models/block_model.js');
var router=express.Router();
//anyone can access this route  ,, will change later if only logged in users can see profiles ,for now anyone can see 
router.get('/users/:username',require('../middlewares/htmlspecialchars'),function(req,res,next){
	
	user.getByName(req.pool,req.params.username, function(err, data){
		if( err === null )
		{
			var user = data[0];
			let block = {
				b1: req.session.id?req.session.id:0,//0 coz no user in DB(for ajax call mentioned below)
				b2: user.id
			};
			blocks.get(req.pool, block, function(err, data){
				if(err === null){
					if(data[0].blocker == block.b1)
						res.status(403).render('403.handlebars',{status :"You have blocked the person. Unblock to see their profile."});
					else
						res.status(403).render('403.handlebars',{status:"You do not have Permission to view this."});
					
				}
				else
				{	
					if(err.myError){
						if(user.is_activated===1) 
						res.json(user); //dont give all info change later ( coz ajax call in /public/js/register.js)
			
					else
						res.status(404).render('404.handlebars',{url:req.url});
				
					}
					else
						res.status(503).render('503.handlebars');
				}
			});
		}
		else
			res.status(404).render('404.handlebars',{url:req.url});
		
	});
});
// router.post('')
module.exports=router;
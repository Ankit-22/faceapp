var express=require('express');
var user = require('../models/user_model.js');
var blocks = require('../models/block_model.js');
var router=express.Router();
//anyone can access this route  ,, will change later if only logged in users can see profiles ,for now anyone can see 
router.get('/users/:username',function(req,res,next){
	user.getByName(req.pool, req.params.username, function(err, data){
		if( err === null )
		{
			var user = data[0];
			let block = {
				b1: 1,
				b2: user.id
			};
			blocks.get(req.pool, block, function(err, data){
				if(err === null)
				{
					if(data[0].blocker = block.b1)
					{
						res.json({error: 503, status: "You have blocked the person. Unblock to see their profile."});
					}
					else
					{
						res.json({error: 503, status: "You do not have Permission to view this."});
					}
				}
				else
				{
					if(user.is_activated = 1)
						res.json(user);
					else
						res.json({error: 404, status: "No User Found"});
				}
			});
		}
		else
		{
			res.json({error: 404, status: "No User Found"});
		}
	});
});
// router.post('')
module.exports=router;
var express=require('express');
var router=express.Router();
var chatDetails = require('../models/chat_details_model.js');
var messages = require('../models/messages_model.js');
router.get('/:usrname/:chatid',require('../middlewares/authenticate'),function(req,res){
//session is allready created so can access it in req
	if(req.params.usrname == req.session.username)
	{
		var details = {
			chatId: req.params.chatid,
			userId: req.session.id
		}
		chatDetails.get(req.pool, details, function(err, data){
			if(err === null)
			{
				messages.getAllFor(req.pool, req.params.chatid, function(err, data){
					if(err === null)
						res.send(data);
					else if(err)
						res.send({error: 404, status: "No such URL"});
				});
			}
			else
			{
				res.send({error: 404, status: "No such URL"});
			}
		});
	}
	else
	{
		res.send({error: 404, status: "No such URL"});
	}
});

module.exports=router;
var express=require('express');
var router=express.Router();
var chatDetails = require('../models/chat_details_model.js');
var messages = require('../models/messages_model.js');
var authenticateMiddleware=require('../middlewares/authenticate');
var htmlspecialcharsMiddleware=require('../middlewares/htmlspecialchars');

router.get('/:usrname/:chatid',[authenticateMiddleware,htmlspecialcharsMiddleware],function(req,res){
		//session is allready created so can access it in req
		
		var details = {
			chatId:req.params.chatid,
			userId: req.session.id
		}
		chatDetails.get(req.pool, details, function(err, data){
			if(err === null)
			{
				messages.getAllFor(req.pool, req.params.chatid, function(err, data){
					if(err === null)
						res.send(data);
					else if(err)
						res.status(404).render('404.handlebars',{url:req.url});
				});
			}
			else
				res.status(404).render('404.handlebars',{url:req.url});
			
		});
	
	
});

module.exports=router;
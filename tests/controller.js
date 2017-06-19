var express=require('express');
var router=express.Router();
var user=require('./usermodel.js');
var friends = require('./friends_model.js');
var msg_details = require('./message_details_model.js');
var logged=false;
router.get('/',function(req,res){
	var messageDetails = {
		messageID: 1,
		recieverID: 2,
		inReciever: 1
	}
	msg_details.updateInReciever(req.pool, messageDetails, function(err, data){
		if(err)
			console.log(err);
		else
			console.log(data);
	});
	msg_details.get(req.pool, messageDetails, function(err, data){
		if(err)
			res.json(err);
		else
			res.json(data);
	})
});
router.get('*',function(req,res){

res.send("404 not found");

});
module.exports=router;
var express = require('express');
var user_model = require('../models/user_model.js');
var friend_model = require('../models/friends_model.js');
var router = express.Router();

router.post('/users/:id', (req, res, next)=>{
	user_model.getByName(req.pool, req.params.id, (err, data)=>{
		if(err === null)
		{
			var id = data[0].id;
			friend_model.getAllFor(req.pool, id, (err, data)=>{
				if(err === null)
				{
					var send = []
					for (var friend in data)
					{
						if(data[friend].friend1 == id)
							send.push(data[friend].friend2);
						else if(data[friend].friend2 == id)
							send.push(data[friend].friend1);
					}
					all_friends = [];
					let f = 0;
					for (var u_id in send)
					{
						user_model.getById(req.pool, send[u_id], (err, data)=>{
							all_friends.push(data[0].user_name);
							f++;
							if(f == send.length)
								res.json({friends: all_friends});
						});
					}
				}
				else if(err.myError)
				{
					res.json({status: 'No friends'});
				}
				else
				{
					res.render('503.handlebars');
				}
			});
		}
		else
		{
			res.json({error: 404, status: 'No user found'});
		}
	});
});

module.exports = router;
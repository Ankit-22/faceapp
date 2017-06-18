const express=require('express');
const router=express.Router();
const user=require('../models/user_model');
router.get('/login',(req,res)=>{
res.sendFile('public/login.html',{root:__dirname+"/../"});
});

router.post('/login',(req,res)=>{
	let username=req.body.username;
	user.getByName(req.pool,username,(err,data)=>{
			if(err){
				if(err.myError)
				res.render('404.handlebars');
				else
					throw err;
			}
			else {
				if(req.body.password===data[0].password){	
					req.session.username=username;
					req.session.id=data[0].id;

					res.redirect('/home');
				}
				else{
					res.send('chal bhopadike');
				}	
			}
	});
	
});

router.get('/logout',(req,res)=>{
	req.session.reset();
res.redirect('/');

});

module.exports=router;
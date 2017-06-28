const express=require('express');
const router=express.Router();
const user=require('../models/user_model');
//anyone can access this route
router.get('/login',(req,res)=>{
res.sendFile('public/login.html',{root:__dirname+"/../"});
});
router.get('/register',(req,res)=>{
res.sendFile('public/register.html',{root:__dirname+"/../"});
});
router.post('/register',(req,res)=>{

res.send(req.body);

});
//anyone can access this route
router.post('/login',(req,res)=>{
	let username=req.body.username;
	user.getByName(req.pool,username,(err,data)=>{
			if(err){
				if(err.myError)
				res.render('404.handlebars',{url:'username is incorrect'});
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
					res.send('password incorrect though username exist in database');
				}	
			}
	});
	
});
//anyone can access this route
router.get('/logout',(req,res)=>{
if(req.session)
req.session.reset();
res.redirect('/');
});

module.exports=router;
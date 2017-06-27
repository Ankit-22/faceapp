var express=require('express');
var router=express.Router();
//this is pain because chrome  always GET for this
router.get('*/favicon.ico',function(req,res){
	res.send('bhaag favicon ');
});

//home page change later
router.get('/',function(req,res){
	if(req.session&&req.session.id)
		 res.redirect('/home');
	else	
	res.sendFile('public/home.html',{root:__dirname+"/../"});
});


router.use(require('./misc.js'));
router.use(require('./usercontroller.js'));  //set this in proper sequence
router.use(require('./chatcontroller.js'));
router.use(require('./messagecontroller.js'));

router.get('*',function(req,res){

	res.render('404.handlebars',{url:req.url});

});
module.exports=router;

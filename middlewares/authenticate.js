module.exports=(req,res,next)=>{
/*	though session is not there but it is {} ,due to req.session.reset() (controllers/misc.js)
	so if(req.session) will always be true in stead use below*/
	if(req.session.id){
		console.log("authenticated "+req.session.username)
		next();
	}
	else{
		console.log('unauthorized access for '+req.url);
		res.status(403).redirect('/');
	}
};
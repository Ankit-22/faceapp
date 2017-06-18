const express = require('express');
const handlebars=require('handlebars');
const dbpool=require('./controllers/pool.js'); //pool is created already (see controllers/pool.js)
const path=require('path');
const sessions=require('client-sessions')
const bodyParser=require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//overide render function of response
express.response.render=function(filename,obj){
	//doesn't matter if obj is null or not passed at all 
	//filename must exist in /views folder;
let source=require('fs').readFileSync(path.join(__dirname,'views',filename),{encoding: 'utf8'});
let template=handlebars.compile(source);
	this.send(template(obj));
}

app=express();
app.use(sessions({
	cookieName: 'session', // cookie name dictates the key name added to the request object
	secret: 'helloworldfaceappankitmanitripathijigarwalalololol', // should be a large unguessable string
	duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
	activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));

app.use((req,res,next)=>{
	if(req.session)
		next();
	else
		res.redirect('/');
});

app.use(express.static(path.join(__dirname,'bower')));
app.use(jsonParser);
app.use(urlencodedParser);

//attach mysql pool to req obj
app.use(function(req,res,next){
req.pool=dbpool;
next();
});

app.use(require('./controllers'));

let port = 3000;
console.log("listening on "+port)
app.listen(port);
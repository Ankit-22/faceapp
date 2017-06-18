var express = require('express');
app=express();
app.use(function(req,res,next){
req.pool=require('./pool.js').Pool;
next();
})
app.use(require('./controller.js'));
var port =3000;
console.log("listening on "+port)
app.listen(port);
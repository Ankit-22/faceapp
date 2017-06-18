let chatmodel=require('./test_chat_model.js');
let pool=require('../controllers/pool.js').Pool;
let obj={
creator:1,
name:'baap',
is_group:0
}/*
chatmodel.getAllFor(pool,1,function(err,data){
	if(err) throw err;
	console.log(data);
});*/

chatmodel.add(pool,obj,function(err,data){
	if(err) throw err;
	console.log(data);
});

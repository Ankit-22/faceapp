let chatDetails=require('./test_chat_details_model.js');
let pool=require('../controllers/pool.js').Pool;
let obj={
	chatId:2,
	userId:1,
	isAdmin:1
}
chatDetails.updateAdmin(pool,obj,(err,data)=>{
 		if(err) 
 		console.log(err);
 	else
 		console.log(data);

})

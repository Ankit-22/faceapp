var usermodel=require('../models/user_model.js');
var pool=require('../controllers/pool.js');
usermodel.getByName(pool,'jigar_wala',(err,data)=>{
if(err)
	throw err;
 console.log(data[0].user_name);
});
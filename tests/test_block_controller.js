let blockmodel=require('./test_block_model.js');
let pool=require('../controllers/pool.js').Pool;

let obj={
	b1:2,
	b2:1
}
blockmodel.add(pool,obj,(err,data)=>{
	if(err) 
	console.log(err);
else
console.log(data);

});
var express=require('express');
var router=express.Router();
router.get('/:usrname/:chatid',function(req,res){

		res.send("all fucking messages for "+req.params.chatid+" for username "+req.params.usrname);

});

module.exports=router;
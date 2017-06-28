module.exports={
	get:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='select	* from chat_details where chat_id=? and user_id =?'
				connection.query(sql,[obj.chatId,obj.userId],function(err,rows){
					connection.release();
						if(err)
							cb(err,null);
						else{
								if(rows.length)
									cb(null,rows);
								else{
										let err={myError:'no rows with chat id '+obj.chatid+'and userid '+obj.userid};
										cb(err,null);	
								}
						}

				});	
			}
		});
	},
	getAllByUser:(pool,userid,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='select	* from chat_details where user_id =?'
				connection.query(sql,[userid],function(err,rows){
					connection.release();
						if(err)
							cb(err,null);
						else{
								if(rows.length)
									cb(null,rows);
								else{
										let err={myError:'user '+userid+" is not talking to anybody"};
										cb(err,null);	
								}
						}

				});	
			}
		});
	},
	getAllByChat:(pool,chatid,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='select	* from chat_details where chat_id=?'
				connection.query(sql,[chatid],function(err,rows){
					connection.release();
						if(err)
							cb(err,null);
						else{
								if(rows.length)
									cb(null,rows);
								else{
										let err={myError:'no rows with chat id '+chatid};
										cb(err,null);	
								}
						}

				});	
			}
		});
	},
	add:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='insert into chat_details(chat_id,user_id,is_admin) values(?,?,?)'
				connection.query(sql,[obj.chatId,obj.userId,obj.isAdmin],function(err,result){
					connection.release();
						if(err)
							cb(err,null);
						else   //for non select operation if(err) is triggered	always
							cb(null,result);
				});	
			}
		});
	},
	updateAdmin:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='update chat_details set is_admin=? where chat_id=? and user_id=?'
				connection.query(sql,[obj.isAdmin,obj.chatId,obj.userId],function(err,result){
					connection.release();
						if(err)
							cb(err,null);
						else   //for non select operation if(err) is triggered	always
							cb(null,result);
				});	
			}
		});		



	}
	/*,
	get:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='select * from blocks where blocked=? and blocker=? or blocked=? and blocker=?';
				connection.query(sql,[obj.b1,obj.b2,obj.b2,obj.b1],function(err,rows){
					connection.release();
						if(err)
							cb(err,null)
						else{
								if(rows.length)
									cb(null,rows)
								else{
										let err={myError:'user '+obj.b1 +' and user '+obj.b2+" are not blocked"};
										cb(err,null);	
								}
						}

				});	
			}
		});	
	},
	add:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
					if(err)
						cb(err,null);
					else{
						  let sql="insert into blocks(blocker,blocked) values(?,?)";
							connection.query(sql,[obj.b1,obj.b2],function(err,result){
								connection.release();
									if(err)
										cb(err,null);
									else
										cb(null,result);
							});
					}
		});
	 },	
	delete:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
						if(err)
							cb(err,null);
						else{
							   let sql="delete from blocks where blocked=? and blocker=? or blocked=? and blocker=?";
								connection.query(sql,[obj.b1,obj.b2,obj.b2,obj.b1],function(err,result){
									connection.release();
										if(err)
											cb(err,null);
										else
											cb(null,result);
								});
						}
			});		
	}*/
}
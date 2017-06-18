module.exports={
	getAllFor:(pool,userid,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				let sql='select	* from blocks where blocked=? or blocker=?'
				connection.query(sql,[userid,userid],function(err,rows){
					connection.release();
						if(err)
							cb(err,null);
						else{
								if(rows.length)
									cb(null,rows);
								else{
										let err={myError:'no user are blocked for '+userid};
										cb(err,null);	
								}
						}

				});	
			}
		});
	},
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
										if(err)
											cb(err,null);
										else
											cb(null,result);
								});
						}
			});		
	}
}
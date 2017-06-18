module.exports={
	getAllFor:(pool,userid,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				connection.query('select * from chats where creator=?',[userid],function(err,rows){
					connection.release();
						if(err)
							cb(err,null);
						else{
								if(rows.length)
									cb(null,rows);
								else{
										let err={myError:'no chatid'};
										cb(err,null);	
								}
						}

				});	
			}
		});
	},
	get:(pool,chatid,cb)=>{
		pool.getConnection((err,connection)=>{
			if(err)
				cb(err,null);
			else{
				connection.query('select * from chats where id=?',[chatid],function(err,rows){
					connection.release();
						if(err)
							cb(err,null)
						else{
								if(rows.length)
									cb(null,rows)
								else{
										let err={myError:'no chatid'};
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
						  let sql="insert into chats(creator,name,is_group) values(?,?,?)";
							connection.query(sql,[obj.creator,obj.name,obj.is_group],function(err,result){
									if(err)
										cb(err,null);
									else
										cb(null,result);
							});
					}
		});
	 },	
	update:(pool,obj,cb)=>{
		pool.getConnection((err,connection)=>{
					if(err)
						cb(err,null);
					else{
						   let sql="update chats set name=? where id=?";
							connection.query(sql,[obj.name,obj.id],function(err,result){
									if(err)
										cb(err,null);
									else
										cb(null,result);
							});
					}
		});	
	},
	delete:(pool,chatid,cb)=>{
		pool.getConnection((err,connection)=>{
						if(err)
							cb(err,null);
						else{
							   let sql="delete from chats where id=?";
								connection.query(sql,[chatid],function(err,result){
										if(err)
											cb(err,null);
										else
											cb(null,result);
								});
						}
			});		
	}
}
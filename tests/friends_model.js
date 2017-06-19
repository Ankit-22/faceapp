module.exports = {
	getAllFor: (pool, id, cb)=>{
		pool.getConnection(function(err,connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "select * from friends where friend1 = "+id+" OR friend2 = "+id;
				connection.query(query ,function(err,rows){
					connection.release();
					if(!err) {
						if(rows.length != 0)
						{
							cb(null, rows);
						}
						else
						{
							err.myError = "No friends";
							cb(err, null);
						}
					}
					else
						cb(err, null);
				});
			}
		});
	},
	get: (pool, friend, cb)=>{
		pool.getConnection(function(err,connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "select * from friends where (friend1 = "+friend.f1+" AND friend2 = "+friend.f2+") OR(friend1 = "+friend.f2+" AND friend2 = "+friend.f1+")";
				connection.query(query ,function(err,rows){
					connection.release();
					if(!err) {
						if(rows.length != 0)
						{
							cb(null, rows);
						}
						else
						{
							err.myError = "Not Friends";
							cb(err, null);
						}
					}
					else
						cb(err, null);
				});
			}
		});
	},
	delete: (pool, friend, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "delete from friends where (friend1 = "+friend.f1+" AND friend2 = "+friend.f2+") OR(friend1 = "+friend.f2+" AND friend2 = "+friend.f1+")";
				connection.query(query ,function(err,rows){
					connection.release();
					if(!err) {
						cb(null, rows);
					}
					else
						cb(err, null);
				});
			}
		});
	},
	add: (pool, friend, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "INSERT INTO friends(friend1, friend2) VALUES("+friend.f1+","+friend.f2+")";
				connection.query(query ,function(err,rows){
					connection.release();
					if(!err) {
						cb(null, rows);
					}
					else
						cb(err, null);
				});
			}
		});
	}
}
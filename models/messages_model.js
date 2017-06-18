module.exports = {
	add: (pool, message, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "INSERT INTO messages(chat_id, sender, type, contents) VALUES("+message.chatId+", "+message.senderId+", "+message.type+", '"+message.contents+"')";
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
	getAllFor: (pool, chatId, cb)=>{
		pool.getConnection(function(err,connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "SELECT * FROM messages WHERE chat_id = "+chatId;
				connection.query(query,function(err,rows){
					connection.release();
					if(!err) {
						if(rows.length != 0)
						{
							cb(null, rows);
						}
						else
						{
							let err = {};
							err.myError = "No Messages";
							cb(err, null);
						}
					}
					else
						cb(err, null);
				});
			}
		});
	}
}
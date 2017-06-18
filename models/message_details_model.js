module.exports = {
	add: (pool, messageDetails, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "INSERT INTO message_details(message_id, reciever_id) VALUES("+messageDetails.messageID+", "+messageDetails.recieverID+")";
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
	updateRecievedTime: (pool, messageDetails, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "UPDATE message_details SET recieved_time = NOW() WHERE message_id = "+messageDetails.messageID+" AND reciever_id = "+messageDetails.recieverID;
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
	updateReadTime: (pool, messageDetails, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "UPDATE message_details SET read_time = NOW() WHERE message_id = "+messageDetails.messageID+" AND reciever_id = "+messageDetails.recieverID;
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
	updateInReciever: (pool, messageDetails, cb)=>{
		pool.getConnection(function(err, connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "UPDATE message_details SET in_reciever = "+messageDetails.inReciever+" WHERE message_id = "+messageDetails.messageID+" AND reciever_id = "+messageDetails.recieverID;
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
	get: (pool, messageDetails, cb)=>{
		pool.getConnection(function(err,connection){
			if (err) {
				cb(err, null);
			}
			else
			{
				console.log('connected as id ' + connection.threadId);
				query = "SELECT * FROM message_details WHERE message_id = "+messageDetails.messageID+" AND reciever_id = "+messageDetails.recieverID;
				connection.query(query,function(err,rows){
					connection.release();
					if(!err) {
						if(rows.length != 0)
						{
							cb(null, rows);
						}
						else
						{	let err={};
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
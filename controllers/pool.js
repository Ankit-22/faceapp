module.exports = require('mysql').createPool({
	connectionLimit: 100,
	host: 'localhost',
	user:'chat',
	password:'Ankit@22',
	database: 'Chat_Room',
	debug: false
});

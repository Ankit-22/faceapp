module.exports = require('mysql').createPool({
	connectionLimit: 100,
	host: 'localhost',
	user:'root',
	password:'root@lamp',
	database: 'faceapp',
	debug: false
});

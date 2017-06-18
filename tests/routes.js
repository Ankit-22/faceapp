module.exports = {
	Route: (req, res, next)=>{
		var path = require('url').parse(req.url).pathname;
		if(path == '/')
		{
			req.controller = 'index';
		}
		next();
	}
}
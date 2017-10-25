const router = require('express').Router();

class HomeController{
	constructor() {
		router.get('/', this.index.bind(this));

		/* Return Router For Express App */
		return router;
	}

	index(req, res) {
		res.end('Home Controller');
	}
}

module.exports = new HomeController();

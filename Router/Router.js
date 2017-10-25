const homeController = require('./../Controller/Home');

class Router {
	constructor(expressApp) {
		expressApp.use('/home', homeController);
	}
}

module.exports = Router;


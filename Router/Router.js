const homeController = require('./../Controller/Home');

class Router {
	initRouter(expressApp) {
		expressApp.use('/home', homeController);
	}
}

module.exports = new Router();


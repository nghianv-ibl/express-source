require('dotenv').config();
require('./Common/Util/Console');

const express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	errorHandler = require('errorhandler'),
	config = require('./Common/Config/Config'),
	logger = require('./Common/Util/Logger'),
	app = express(),
	server = require('http').Server(app),

	database = require('./Database/Database'),
	router = require('./Router/Router');

class Server {
	constructor() {
		this.initExpressMiddleWares();
		this.initCustomMiddleWares();
		this.initDatabase();
		this.initRoute();
		this.initSocket();
		this.start();
	}

	initExpressMiddleWares() {
		app.use(cors());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use(errorHandler());
		app.use(morgan(':method :url :status :response-time ms', { stream: { write: (message) => logger.info(message) } }));
	}

	initCustomMiddleWares() {
		if (process.platform === 'win32') {
			require('readline').createInterface({
				input: process.stdin,
				output: process.stdout
			}).on('SIGINT', () => {
				database.close();
				process.exit(0);
			});
		}

		process.on('SIGINT', () => {
			database.close();
			process.exit(0);
		});
	}

	initDatabase() {
		database.open();
	}

	initRoute() {
		router.initRouter(app);
		/* Global Info */
		app.get('/', (req, res) => {
			res.send('<h1 style="text-align: center; margin-top: 40vh">Server is listening request!</h1>');
		});
	}

	initSocket() {

	}

	start() {
		server.listen(config.PORT, () => {
			console.log('Test Console');
			logger.info(`Server listen on port ${config.PORT}`);
		});
	}
}

new Server();

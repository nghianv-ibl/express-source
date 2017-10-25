const config = require('./../Common/Config/Config'),
	logger = require('./../Common/Util/Logger'),
	Connection = require('./Connection');

class Database {
	open() {
		config.CONNECTIONS.forEach(connectionInfo => {
			if (connectionInfo.enable !== 'true')
				return;
			const connection = new Connection(
				connectionInfo.host,
				connectionInfo.port,
				connectionInfo.user,
				connectionInfo.pass,
				connectionInfo.database,
				connectionInfo.auth_mechanism
			);
			connection.connect()
				.then(db => {
					logger.info(`Connected to database: ${connectionInfo.database}`);
					connectionInfo.db = db;
				})
				.catch(error => {
					logger.error(`Connect fail to database: ${connectionInfo.database}`);
					logger.error(`Error info: \n\t ${error}`);
				});
		});
	}

	close() {
		config.CONNECTIONS.forEach(connectionInfo => {
			if (connectionInfo.enable === 'true' && connectionInfo.db)
				connectionInfo.db.close(() => {
					logger.info(`Disconnected to database: ${connectionInfo.database}`);
					process.exit(0);
				});
		});
	}
}

module.exports = new Database();

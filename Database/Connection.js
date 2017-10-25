const mongoDB = require('mongodb'),
	util = require('util');

class Connection {
	constructor(host, port, user, pass, database, authMechanism) {
		this.host = host;
		this.port = port;
		this.user = user;
		this.pass = pass;
		this.database = database;
		this.authMechanism = authMechanism;
		this.url = util.format(
			'mongodb://%s:%s@%s:%s/%s?authMechanism=%s',
			this.user,
			this.pass,
			this.host,
			this.port,
			this.database,
			this.authMechanism
		);
	}

	connect() {
		return mongoDB.MongoClient.connect(this.url);
	}
}

module.exports = Connection;

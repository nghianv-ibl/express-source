module.exports = {
	HOST: process.env.HOST || '127.0.0.1',
	PORT: process.env.PORT || 3000,
	CONNECTIONS: [
		{
			name: 'admin',
			host: process.env.DB_HOST || '127.0.0.1',
			port: process.env.DB_PORT || 27017,
			database: process.env.DB_DATABASE || 'admin',
			user: process.env.DB_USER || 'admin',
			pass: process.env.DB_PASS || 'admin',
			auth_mechanism: process.env.DB_AUTH_MECHANISM || 'DEFAULT',
			db: null,
			enable: process.env.DB_ENABLE || 'true'
		}
	],
	WEB3_HTTP_PROVIDER: 'http://localhost:8545'
};

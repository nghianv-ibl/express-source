const winston = require('winston'),
	dateformat = require('dateformat');

module.exports = new winston.Logger({
	transports: [
		new winston.transports.File({
			filename: './Log/Server.log',
			handleExceptions: true,
			json: false,
			maxsize: 5242880,
			maxFiles: 5,
			colorize: false
		}),
		new winston.transports.Console({
			handleExceptions: true,
			json: false,
			colorize: true,
			timestamp: function () {
				return dateformat(Date.now(), 'yyyy-mm-dd HH:MM:ss');
			},
			formatter: function (options) {
				return winston.config.colorize(options.level,
					options.timestamp() + ' [' +
					options.level.toUpperCase() + '] ' +
					(options.message ? options.message : '') +
					(options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '')
				);
			}
		})
	],
	exitOnError: false
});

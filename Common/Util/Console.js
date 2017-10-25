require('console-stamp')(console, {
	pattern: 'HH:MM:ss.l',
	datePrefix: '',
	dateSuffix: '',
	metadata: '[' + process.pid + ']',
	colors: {
		stamp: ['black', 'bgGreen', 'underline'],
		label: 'yellow',
		metadata: 'green'
	}
});

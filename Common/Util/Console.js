require('console-stamp')(console, {
	pattern: 'HH:MM:ss.l',
	datePrefix: '<<== ',
	dateSuffix: ' ==>>',
	metadata: '3==D~~~',
	colors: {
		stamp: ['white', 'bgBlue', 'underline'],
		label: 'yellow',
		metadata: 'red'
	}
});

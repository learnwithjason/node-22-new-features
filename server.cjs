const { createServer } = require('node:http');
const { something } = require('./foo.mjs');

const server = createServer();

server.on('request', (_req, res) => {
	console.log('hello');

	something();

	res.end('response');
});

server.listen(3000);

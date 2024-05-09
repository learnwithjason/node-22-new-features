import { createServer } from 'node:http';
import { parseArgs, styleText } from 'node:util';
import { glob, watch } from 'node:fs/promises';
import { createReadStream } from 'node:fs';

const options = {
	hi: {
		type: 'string',
		short: 'f',
	},
	bar: {
		type: 'string',
	},
};
const { values, positionals } = parseArgs({ args: process.args, options });

console.log(values, positionals);
console.log(styleText(['green', 'underline'], values.hi));

// for await (const file of glob(`${import.meta.dirname}/*`)) {
for await (const file of watch(`${import.meta.dirname}`)) {
	if (file.filename.endsWith('js')) {
		const stream = createReadStream(file.filename);

		for await (const chunk of stream) {
			console.log(styleText('green', chunk.toString().toUpperCase()));
		}
	}
}

// const server = createServer();

// server.on('request', (_req, res) => {
// 	console.log('hello');

// 	res.end('response');
// });

// server.listen(3000);

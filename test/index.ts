import { test } from 'node:test';
import assert from 'node:assert/strict';

import { something } from '../foo.mjs';

test('something', async function () {
	assert.equal(something(), 'hi');
});

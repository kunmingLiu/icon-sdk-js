import assert from 'assert';
import IconService, { HttpProvider } from '..';
import * as Type from '../lib/data/Type';

const TestAddress = 'hx902ecb51c109183ace539f247b4ea1347fbf23b5';

describe('IconService', () => {
	describe('getBalance()', () => {
		const iconService = new IconService(new HttpProvider('https://bicon.net.solidwallet.io/api/v3'));
		it('The value of balance is BigNumber.', async () => {
			const balance = await iconService.getBalance(TestAddress).execute();
			assert.ok(Type.isBigNumber(balance));
		});
	});
});
import axios from 'axios';
import { get } from '..';

jest.mock('axios');

describe('Service Tests', () => {
	it('should return response for given url', async () => {
		const dummyURL = 'api/users';
		const users = [{ id: 1, name: 'test' }];
		(axios.get as jest.Mock).mockResolvedValue({ data: users });
		const res = await get(dummyURL);
		expect(res).toEqual(users);
	});

	it('should catch error', async () => {
		const expectedError = { error: { message: 'Internal Server error' } };
		try {
			const dummyURL = 'api/users';
			(axios.get as jest.Mock).mockResolvedValue(Promise.reject(expectedError));
			await get(dummyURL);
		} catch (error) {
			expect(error).toEqual(expectedError);
		}
	});
});

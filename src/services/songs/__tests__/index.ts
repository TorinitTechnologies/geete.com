import axios from 'axios';
import { fetchSongs } from '..';
jest.mock('axios');

describe('Songs API tests', () => {
	it('should return songs list', async () => {
		const dummyURL = 'api/songs';
		const songs = [{ id: 1, name: 'test song' }];
		(axios.get as jest.Mock).mockResolvedValue(songs);
		const songsResponse = await fetchSongs(dummyURL);
		expect(songsResponse).toEqual(songsResponse);
	});
});

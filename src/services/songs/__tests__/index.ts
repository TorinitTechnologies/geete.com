import axios from 'axios';
import { fetchSongs } from '..';
jest.mock('axios');

const songItem: SongItem = {
	artistId: 1,
	artistName: 'test',
	artistViewUrl: 'test',
	artworkUrl60: 'test',
	artworkUrl100: 'test',
	collectionCensoredName: 'test',
	collectionExplicitness: 'test',
	collectionId: 123,
	collectionName: 'test',
	collectionPrice: 123,
	collectionViewUrl: 'test',
	copyright: 'test',
	country: 'USA',
	currency: 'test',
	description: 'test',
	previewUrl: 'test',
	primaryGenreName: 'test',
	releaseDate: '2006-10-09T07:00:00Z',
	trackCount: 1,
	wrapperType: 'audio_book',
};

describe('Songs API tests', () => {
	it('should return songs list', async () => {
		const dummyURL = 'api/songs';
		const songs: SongsResponse = { resultCount: 1, results: [songItem] };
		(axios.get as jest.Mock).mockResolvedValue(songs);
		const songsResponse = await fetchSongs(dummyURL);
		expect(songsResponse).toEqual(songsResponse);
	});
});

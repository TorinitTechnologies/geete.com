import { get } from '@services/index';

export const fetchSongs = async (url: string) => {
	const songsResponse = await get(url);
	return songsResponse;
};

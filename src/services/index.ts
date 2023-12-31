import axios from 'axios';

export const get = (url: string) => {
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => {
				resolve(res.data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

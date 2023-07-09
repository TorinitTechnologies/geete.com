const path = require('path');

const getAliases = () => {
	return {
		'@atoms': path.resolve(__dirname, '../src/shared/atoms'),
		'@layouts': path.resolve(__dirname, '../src/layouts'),
		'@pages': path.resolve(__dirname, '../src/pages'),
		'@store': path.resolve(__dirname, '../src/store'),
		'@testUtils': path.resolve(__dirname, '../src/testUtils'),
		'@middleware': path.resolve(__dirname, '../src/middleware'),
	};
};

module.exports = getAliases;

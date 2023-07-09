const path = require('path');

const getAliases = () => {
	return {
		'@atoms': path.resolve(__dirname, '../src/shared/atoms'),
		'@layouts': path.resolve(__dirname, '../src/layouts'),
		'@pages': path.resolve(__dirname, '../src/pages'),
	};
};

module.exports = getAliases;

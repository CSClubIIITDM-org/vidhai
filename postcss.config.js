const uncss = require('postcss-uncss')({
	html: ['public/**/*.html'],
	ignore: [
		/.*\.active*/,
		/.*\.carousel*/,
	]
})

module.exports = {
	map: false,
	plugins: [
		require('autoprefixer'),
		...process.env.HUGO_ENVIRONMENT === 'production'
			? [uncss]
			: []
	]
}

/* craco.config.js */
const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src/'),
			'@Components': path.resolve(__dirname, 'src/components'),
			'@So_on': path.resolve(__dirname, 'src/so_on'),
		}

	},
	style: {
		sass: {
			loaderOptions: {
				additionalData: `
			@import "src/styles/variables.scss";
			@import "src/styles/mixins.scss";
		 `,
			},
		}
	}
}

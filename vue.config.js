module.exports = {
	pwa: {
		iconPaths: {
			favicon32: 'logo.ico',
			favicon16: 'logo.ico',
			appleTouchIcon: 'logo.ico',
			maskIcon: 'logo.ico',
			msTileImage: 'logo.ico'
		}
	},
	configureWebpack: {
		externals: {
			'vue': 'Vue',
			'iview': 'iview',
			'element-ui': 'ELEMENT'
		}
	}
};

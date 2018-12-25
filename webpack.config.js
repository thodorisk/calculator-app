const path=require('path');

module.exports = {
	entry: './calc.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'calc.bundle.js'
	}
}
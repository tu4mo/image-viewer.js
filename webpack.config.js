var webpack = require("webpack");

module.exports = {
	entry: "./image-viewer.js",
	output: {
		path: __dirname,
		filename: "image-viewer.min.js"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
};

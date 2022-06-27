var webpack = require("webpack");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
};

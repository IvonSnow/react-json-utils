var path = require("path");
var webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackCommonConfig = require("./webpack.common.js");

const basePath = path.resolve(__dirname, "../");

module.exports = merge(webpackCommonConfig, {
	mode: "development",
	entry: path.join(basePath, "src", "index.js"),
	output: {
		path: path.resolve(__dirname, "../lib"),
		publicPath: "/lib/",
		filename: "react-json-utils.js", // 输出文件名
		library: "react-json-utils", // 组件库名称
		libraryTarget: "umd", //模块化格式
		// umdNamedDefine: true,
	},
	externals: ["react"],
});

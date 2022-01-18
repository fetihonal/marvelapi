const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./src/index.js"),
	output: {
		publicPath: '/',
		filename: "main.bundle.[hash].js",
		path: path.resolve(__dirname, "build"),
		assetModuleFilename: "images/[hash][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: [
							"transform-class-properties",
							"@babel/plugin-transform-runtime",
						],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			// {
			// 	test: /\.svg$/,
			// 	type: 'asset',
			// 	loader: 'svg-inline-loader'
			// },
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: "asset/resource",
				// include: path.resolve(__dirname, './src/assets/fonts'),
				// options: {
				// 	name: '[name].[ext]',
				// 	outputPath: 'fonts/'
				// },
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".png"],
		alias: {
			Utilities: path.resolve(__dirname, "src/utils/"),
		},
	},
	devtool: "eval-cheap-module-source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: "Marvel",
			template: path.resolve(__dirname, "./public/index.html"),
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 9000,
		open: true,
		hot: true,
		contentBase: "./",
		historyApiFallback: true,
	},
};

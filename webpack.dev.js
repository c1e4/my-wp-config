const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        watchFiles: ["src/*.html"],
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
        host: "0.0.0.0",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            favicon: "./src/fav.svg",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "postcss-loader", //for autoprefixer
                    "sass-loader", //1. Turns sass into css
                ],
            },
        ],
    },
});

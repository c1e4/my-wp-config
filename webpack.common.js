const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        // vendor: "./src/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]-[hash].[ext]",
                        outputPath: "assets/images",
                    },
                },
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot)$/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/fonts/[name]-[hash][ext]",
                },
            },
        ],
    },
};

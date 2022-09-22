const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "./assets/images/[name]-[hash][ext]",
                },
                // embed small images in the HTML to reduce load time. WP5 native
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // Inline anything under 10kb
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

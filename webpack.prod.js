const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputJSFileName = "script";
const outputCSSFileName = "style";

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: `js/${outputJSFileName}-[contenthash].js`,
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                favicon: "./src/fav.svg",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `css/${outputJSFileName}-[contenthash].css`,
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2. Turns css into commonjs
                    "postcss-loader", //for autoprefixer
                    "sass-loader", //1. Turns sass into css
                ],
            },
        ],
    },
});

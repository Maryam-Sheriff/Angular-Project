const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']


        }]

    },
    plugins: [
        new CleanWebpackPlugin(), new HtmlWebpackPlugin({ filename: 'index.html' })
    ],
    //   devServer: {
    //       contentBase: path.resolve(__dirname, './dist'),
    /*      index: 'index.html',
          port: 5200
      }*/
    devServer: {
        // contentBase
        static: {
            directory: path.join(__dirname, './dist')
        },
        port: 3000,
        // publicPath
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        // hotOnly
        hot: "only",
    },


}
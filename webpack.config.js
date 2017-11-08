var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        admin: './src/admin/js/admin.js',
        screen: './src/screen/js/screen.js'
    },
    output: {
        path: path.resolve("./dist/"),
        filename: '[name].js'
    },
    module: {
        loaders: [{loader: 'babel-loader'}]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

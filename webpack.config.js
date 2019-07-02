const path = require('path');
const webpack = require('webpack');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module : {
        rules : [
            {test: /\.text$/, use: 'raw-loader'}
        ]
    },
};

module.exports = config;
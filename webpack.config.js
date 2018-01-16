const path = require('path')

module.exports = {
    entry: './server.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js',
        publicPath: '/',
    },
    target: 'node',
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'stage-0',
                        ['env', {
                            targets: {
                                node: 'current',
                            },
                        }],
                    ],
                },
            },
        ],
    },
}

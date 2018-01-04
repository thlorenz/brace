const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        library: 'reactiveAntlr',
        libraryTarget: 'umd'
    },
    node: { module: "empty", net: "empty", fs: "empty" }
};
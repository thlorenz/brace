const path = require('path');

module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'rule-lang1-0-0.js',
        library: 'reactiveAntlr',
        libraryTarget: 'umd'
    },
    node: { module: "empty", net: "empty", fs: "empty" }
};
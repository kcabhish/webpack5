const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                /**
                 * There are 4 types of asset types
                 * 1. asset/resource
                 * 2. asset/inline
                 * 3. asset
                 * 4. asset/source
                 */
                type: 'asset/resource'  
            }
        ]
    }
}
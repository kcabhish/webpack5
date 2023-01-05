const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                /**
                 * There are 4 types of asset types
                 * 1. asset/resource : emits a separate file and exports the URL. Use while importing large files.
                 * 2. asset/inline : exports a data URI of the asset. Use while importing small files.
                 * 3. asset : automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit. by default it is set to 8kb,
                 *      files larger than 8kb are treated as asset/resource and files below 8kb are treated as asset/inline
                 * 4. asset/source : exports the source code of the asset. Previously achievable by using raw-loader.
                 */
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // Changing the default value to 3kb instead of 8kb
                    }
                }  
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                // uses loaders to handle css and styles
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
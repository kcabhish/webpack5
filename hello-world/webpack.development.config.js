const path = require('path');
// generates html file with the webpack build in the path specified in output property
const HtmlWebpackPlugin = require('html-webpack-plugin');
// allows modules to be imported dynamically from different project
const { ModuleFederationPlugin } = require('webpack').container;

const port = 9001;
module.exports = {
    entry: {
        // 'dbz': './src/dbz.js',
        'hello-world': './src/hello-world.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        // adding contenthash in the output file name will add md5 hash code in the files to detect changes in the file.
        // content hash can be disabled in development mode
        filename: '[name].js',
        publicPath: `http://localhost:${port}/`,
        clean: true
    },
    /**
     * Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
     * string = 'production': 'none' | 'development' | 'production'
     */
    mode: 'development',
    devServer: {
        port: port,
        static: {
            directory: path.resolve(__dirname,'./dist'),
        },
        devMiddleware: {
            index: "[name].html",
            writeToDisk: true
        },
        open:true
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg)$/,
            //     /**
            //      * There are 4 types of asset types
            //      * 1. asset/resource : emits a separate file and exports the URL. Use while importing large files.
            //      * 2. asset/inline : exports a data URI of the asset. Use while importing small files.
            //      * 3. asset : automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit. by default it is set to 8kb,
            //      *      files larger than 8kb are treated as asset/resource and files below 8kb are treated as asset/inline
            //      * 4. asset/source : exports the source code of the asset. Previously achievable by using raw-loader.
            //      */
            //     type: 'asset',
            //     parser: {
            //         dataUrlCondition: {
            //             maxSize: 3 * 1024 // Changing the default value to 3kb instead of 8kb
            //         }
            //     }  
            // },
            // {
            //     test: /\.txt/,
            //     type: 'asset/source'
            // },
            {
                test: /\.s?css$/,
                // webpack loads loader right to left. sass-loader > css-loader > style-loader
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },{
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    /**
     * Plugins are additional Javascript libraries that do everything that loaders cannot do. Plugins can be used to reduce the bundle size, define global variables 
     * for the entire application, create multiple bundle.js etc
     */
    plugins: [
        // https://github.com/jantimon/html-webpack-plugin#options
        /**
         * To generate multiple html pages we need to add HtmlWebpackPlugin multiple times.
         * For example: if we want to include 2 html pages then this needs to be included twice with different settings
         */
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            /**
             * Chunks define the list of js files that needs to be included in the html page.
             */
            // chunks: ['hello-world'],
            // this will generate the html file with title tag
            title: 'Hello world',
            // custom output file name, if this is not provided it will default to index.html
            // filename: 'subfolder/custom_filename.html',
            template: 'src/page-template.hbs',
            description: 'This description is for hello world page',
            // by default minify is true in production mode
            minify: false
        }),
        // new HtmlWebpackPlugin({
        //     filename:'dbz.html',
        //     chunks:['dbz'],
        //     // this will generate the html file with title tag
        //     title: 'dbz',
        //     // custom output file name, if this is not provided it will default to index.html
        //     // filename: 'subfolder/custom_filename.html',
        //     template: 'src/page-template.hbs',
        //     description: 'This description is for dbz page',
        //     minify: false
        // })
        new ModuleFederationPlugin({
            name: 'HelloWorldApp',
            filename: 'remoteEntry.js',
            exposes: {
                './HelloWorldButton': './src/components/hello-world-button/helloWorldButton.js'
            }
        })
    ]
}
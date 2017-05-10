var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"); 
module.exports = {
    entry: {
        '/weui/RxFields': './src/weui/RxFields.js' 
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'RxFields',
        libraryTarget: 'umd',
        umdNameDefine: true
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react&compact=false'
        }, {
            test: /\.less$/,
            loader: "style!css!less",
            options: {
                minimize: true
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            options: {
                minimize: true
            }
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            loader: 'url-loader?limit=300000&name=[name]-[hash].[ext]'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
      
         new uglifyJsPlugin({
             output: {
                comments: false,  
            },
            compress: {
                warnings: false
            }
        }) 
    ]

};
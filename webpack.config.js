const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: 'none',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer:{
        static: path.join(__dirname, 'dist'),
        port: 9000
    },
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/i,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack radi',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}
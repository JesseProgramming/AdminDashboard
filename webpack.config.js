const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        //publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              /*{
                test: /\.(png|jpe?g|gif|ico)$/i,
                dependency: { not: ['url'] },
                loader:
                    'file-loader',
              },*/
              {
                test: /\.(png|jpg|webp|gif|svg|mp4)$/,
                dependency: { not: ['url'] },
                use: [
                       {
                           loader: 'file-loader',

                       }
                     ]
              },
              {
                test: /\.html$/i,
                loader: "html-loader",
              },
              
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            //favicon: "./src/favicon.ico",
        })
    ]
}
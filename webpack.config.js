var webpack = require("webpack");

module.exports = {
    mode: 'development', 
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['react','es2015', 'stage-0']
            }
          }
        }, {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: "file-loader"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: "url-loader?limit=10000&mimetype=image/svg+xml"
        }
      ]
    },
    devServer: {
        contentBase: "./app",
        hot: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
    },
    resolve: {
      modules: ['node_modules']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      })
    ],

  };

const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: /(node_modules)/,
            }
        ]
    }
}

// var path = require('path');

// console.log("IN webpack config")

// module.exports = {

//   entry: './src/js/app.js',

//   output: {  path: path.resolve(__dirname,'dist'),
//              filename: 'bundle.js' },

//   devtool: 'source-map',
//   mode: 'production',

//   module: {

//     loaders: [

//       {

//         test: /.jsx?$/,

//         loader: 'babel-loader',

//         exclude: /node_modules/,

//         query: {

//           presets: ['es2015']

//         }

//       }

//     ]

//   },

// };
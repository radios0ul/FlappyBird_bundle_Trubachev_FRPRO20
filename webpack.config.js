const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

   mode: 'production',
   entry: {

      filename: path.resolve(__dirname, 'src/index.js')
   },

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      assetModuleFilename: '[name][ext]',
   },

   performance: {
      hints: false,
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
   },

   devServer: {
      port: 9000,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg)$/i,
            type: 'asset/resource'
         }
      ]
   },

   plugins: [
      new htmlWebpackPlugin({
         title: 'FlappyBird',
         filename: 'index.html',
         template: 'src/html/index.html'
      })
   ]

}
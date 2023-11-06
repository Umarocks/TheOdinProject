const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main entry point
  output: {
    filename: 'main.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following loaders to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript transpilation
        },
      },
      {
        test: /\.css$/, // Apply the following loaders to .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS
      },
    ],
  },  
  devServer: {
    contentBase: './dist', // Serve content from the 'dist' directory
  },
};

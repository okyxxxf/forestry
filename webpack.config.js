const path = require('path');

module.exports = {
  entry: './pages/main-page/scripts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle-main-page.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
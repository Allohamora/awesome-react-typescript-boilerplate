const path = require('path');

const { build, src, public, tsconfig } = require('../paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // entry file
  entry: [
    path.join(src, 'index.tsx')
  ],

  output: {
    path: build,
    filename: '[contenthash].js',
    publicPath: '/'
  },

  plugins: [
    // clear build dir
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(public, 'index.html'),
      filename: 'index.html'
    }),

    // copy files from public to build
    new CopyWebpackPlugin({
      patterns: [
        {
          from: public,
          globOptions: {
            dot: true,
            ignore: [
              '*.DS_Store'
            ]
          },
          filter: (filePath) => !(/index.html/.test(filePath))
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        exclude: [/node_modules/, /__tests__/],
        use: ['ts-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
        type: 'asset/resource'
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
        type: 'asset/inline'
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: tsconfig })
    ]
  }
};

import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';

const config: webpack.Configuration = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    // refresh js by adding hash after uploading new version of website
    filename: 'main.[hash].js',
  },
  performance: {
    // to not show warnings about too big bundle size
    hints: false,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // for webpack performance
        cache: true,
        parallel: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // for scss
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'fast-sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // import that in all vue sfc and scss files
              resources: [
                // importing this first for ability to override variables
                'src/scss/base/tachyons-sass-variable-overrides.scss',
                'node_modules/tachyons-sass/scss/_variables.scss',
                'src/scss/helpers/**/*.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // inline images if size under 10000 bytes
              limit: 10000,
              outputPath: 'assets/img',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              // put all svg icons in separate file sprite.svg
              extract: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              // doesn't use external config by default
              externalConfig: '.svgo.yml',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // refresh styles by adding hash after uploading new version of website
      filename: 'style.[hash].css',
    }),
  ],
};

export default merge(baseConfig, config);

// .storybook/webpack.config.js
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    oneOf: [
      {
        resourceQuery: /module/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[hash]'
              },
              localsConvention: 'camelCase'
            }
          },
          'sass-loader'
        ]
      },
      { use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ] }
    ]
  });
  return config;
}
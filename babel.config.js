module.exports = {
  plugins: ['lodash'],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
    'react-app',
  ],
};

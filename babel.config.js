module.exports = {
  presets: [
    [
      '@babel/env',
      {
        // modules: false,
        // debug: true,
        corejs: 3,
        useBuiltIns: 'usage',
        targets: {
          ie: '11',
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
  ],

};

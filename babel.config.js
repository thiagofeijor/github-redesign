module.exports = {
  presets: ['poi/babel'],
  plugins: [
    'babel-plugin-styled-components',
    [
      '@babel/plugin-proposal-class-properties',
      { 'loose': false }
    ], 
  ],
  env: {
    test: {
      presets: [['poi/babel']]
    }
  }
}

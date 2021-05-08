module.exports = {
  presets: ['poi/babel'],
  plugins: ['babel-plugin-styled-components'],
  env: {
    test: {
      presets: [['poi/babel']]
    }
  }
}

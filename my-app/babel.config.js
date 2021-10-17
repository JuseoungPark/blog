module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css: {
    loaderOption: {
      sass: {
        prependData: '@import @/assets/scss/index.scss'
      }
    }
  }
}

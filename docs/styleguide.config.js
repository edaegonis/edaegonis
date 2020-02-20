const path = require("path")

module.exports = {
  components: ["../components/**/*.js"],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "../components/ThemeWrapper/ThemeWrapper")
  },
  title: "Edusorcerer's Components Library",
  /** This is necessary because styleguide overrides any webpack's output config */
  dangerouslyUpdateWebpackConfig: config => {
    config.output = {
      path: `${path.resolve(__dirname)}/build`,
      filename: "bundle.js",
      chunkFilename: "[name].js"
    }
    return config
  }
}

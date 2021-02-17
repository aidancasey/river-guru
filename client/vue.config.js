module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },

    devServer: {
      proxy: "http://localhost:8000"
    },

    transpileDependencies: [
      'vuetify'
    ]
}

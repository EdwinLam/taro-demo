const HOST = '"http://localhost:8084"'
module.exports = {
  env: {
    SERVICE_URL: `${HOST}`,
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/**/**': {
          target: JSON.parse(HOST),
          changeOrigin: true
        }
      }
    }
  }
}

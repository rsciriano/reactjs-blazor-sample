const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(
        '/greet.Greeter',
        createProxyMiddleware({
          target: 'http://localhost:5005',
          changeOrigin: true,
        })
      );

};
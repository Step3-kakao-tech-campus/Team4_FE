const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://k04b53cc4de90a.user-app.krampoline.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );

  app.use(
    '/language/translate/v2',
    createProxyMiddleware({
      target: 'https://translation.googleapis.com',
      changeOrigin: true,
    }),
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://kf3c002a226dca.user-app.krampoline.com',
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

  app.use(
    '/s3Image',
    createProxyMiddleware({
      target: 'https://matgpt-dev.s3.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/s3Image': '/',
      },
    }),
  );
};

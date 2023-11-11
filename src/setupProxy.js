const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    // origin 다음의 첫 번째 path를 넣어준다.
    '/api',
    createProxyMiddleware({
      // origin의 주소와 changeOrigin을 설정값을 ture로 넣어준다.
      target: 'https://kf3c002a226dca.user-app.krampoline.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    }),
  );

  app.use(
    // origin 다음의 첫 번째 path를 넣어준다.
    '/api',
    createProxyMiddleware({
      // origin의 주소와 changeOrigin을 설정값을 ture로 넣어준다.
      target: 'https://matgpt-dev.s3.ap-northeast-2.amazonaws.com',
      changeOrigin: true,
      pathRewrite: { '^/users': '/' },
    }),
  );
};

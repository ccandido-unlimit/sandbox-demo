// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/onramp',
    createProxyMiddleware({
      target: 'https://api-sandbox.gatefi.com',
      changeOrigin: true,
    })
  );
};
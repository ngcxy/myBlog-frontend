const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/users',
            {
                target: "https://my-blog-backend-delta.vercel.app",
                changeOrigin: true
            })
    )
}

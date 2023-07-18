// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = app => {
//     app.use(
//         createProxyMiddleware('/post',
//             {
//                 target: "https://my-blog-backend-delta.vercel.app",
//                 changeOrigin: false
//             })
//     )
//     app.use(
//         createProxyMiddleware('/api/token',
//             {
//                 target: "https://my-blog-backend-delta.vercel.app",
//                 changeOrigin: false
//             })
//     )
//     app.use(
//         createProxyMiddleware('/api/token/blacklist',
//             {
//                 target: "https://my-blog-backend-delta.vercel.app",
//                 changeOrigin: false
//             })
//     )
//     app.use(
//         createProxyMiddleware('/users/create',
//             {
//                 target: "https://my-blog-backend-delta.vercel.app",
//                 changeOrigin: false
//             })
//     )
// }

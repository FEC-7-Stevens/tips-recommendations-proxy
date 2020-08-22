const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 6260;

app.use(cors());
// app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

// app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

// app.get('/:id', function (req, res) {
//   res.send('hello');
// });

// CAROUSEL
app.use('/api/photos/:restaurantID', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// // INFO
app.use('/:copyId/restaurants/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

// // TIPS & RECOMMENDATIONS
app.use('/api/tips/:id', createProxyMiddleware({ target: 'http://localhost:6070', changeOrigin: true }));

app.use('/api/articles/:id', createProxyMiddleware({ target: 'http://localhost:6070', changeOrigin: true }));

// // SIMILAR RESTAURANTS
app.use('/restaurants/:id', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

// app.get('/:id', (req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, '../client/dist')});
// })

// app.listen(port, () => {
//   console.log(`Proxy listening on http://127.0.0.1:${port}`);
// });
app.listen(port, () => {
  console.log(`Proxy listening on http://localhost:${port}`);
});
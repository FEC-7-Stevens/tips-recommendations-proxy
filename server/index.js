const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 5120;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

// CAROUSEL
app.use('/api/photos/:restaurantID', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// INFO
app.use('/:copyId/restaurants/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

// TIPS & RECOMMENDATIONS
app.use('/api/tips/:id', createProxyMiddleware({ target: 'http://localhost:5120', changeOrigin: true }));

app.use('/api/articles/:id', createProxyMiddleware({ target: 'http://localhost:5120', changeOrigin: true }));

// SIMILAR RESTAURANTS
app.use('/restaurants/:id', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

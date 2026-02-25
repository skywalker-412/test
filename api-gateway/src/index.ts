import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.use('/users', createProxyMiddleware({ target: 'http://user-service:4001', changeOrigin: true }));
app.use('/events', createProxyMiddleware({ target: 'http://event-service:4002', changeOrigin: true }));
app.use('/bookings', createProxyMiddleware({ target: 'http://booking-service:4003', changeOrigin: true }));
app.use('/payments', createProxyMiddleware({ target: 'http://payment-service:4004', changeOrigin: true }));
app.use('/notifications', createProxyMiddleware({ target: 'http://notification-service:4005', changeOrigin: true }));
app.use('/reviews', createProxyMiddleware({ target: 'http://review-service:4006', changeOrigin: true }));

app.get('/', (req, res) => res.send('API Gateway'));

app.listen(4000, () => {
  console.log('API Gateway running on port 4000');
});
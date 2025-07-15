import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';


const app = express();
const PORT = 7001;

console.log('Starting frontend server...');

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Client-side routing fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/api/test', createProxyMiddleware({
  target: 'http://172.29.0.22:7001',
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 7011;

console.log('Starting frontend server...');
console.log(`Using API URL: ${process.env.API_URL}`);

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Client-side routing fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/api', createProxyMiddleware({
  target: process.env.API_URL,
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

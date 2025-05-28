import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const ORDERS_FILE = path.join(__dirname, 'orders.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/api/orders', (req, res) => {
  fs.readFile(ORDERS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Ошибка чтения файла заказов' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  fs.readFile(ORDERS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Ошибка чтения файла заказов' });
    }
    const orders = JSON.parse(data);
    orders.push(order);
    fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ success: false, error: 'Ошибка записи файла заказов' });
      }
      res.json({ success: true });
    });
  });
});

app.get('/', (req, res) => {
  res.send('API работает! Для заявок используйте /api/orders');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
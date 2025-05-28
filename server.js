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

// Сохранить заявку
app.post('/api/orders', (req, res) => {
  const { name, phone, service, comment } = req.body;
  const date = new Date().toISOString();
  let orders = [];
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
    } catch (e) {
      orders = [];
    }
  }
  const newOrder = { id: Date.now(), name, phone, service, comment, date };
  orders.push(newOrder);
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  res.json({ success: true, id: newOrder.id });
});

// Получить все заявки
app.get('/api/orders', (req, res) => {
  let orders = [];
  if (fs.existsSync(ORDERS_FILE)) {
    try {
      orders = JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
    } catch (e) {
      orders = [];
    }
  }
  res.json(orders.reverse());
});

// Для проверки работы сервера
app.get('/', (req, res) => {
  res.send('API работает! Для заявок используйте /api/orders');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
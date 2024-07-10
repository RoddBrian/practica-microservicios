const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let products = [];

// Crear un producto
app.post('/products', (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.status(201).json(product);
});

// Obtener todos los productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Obtener un producto por ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).send('Product not found');
  }
  res.json(product);
});

app.listen(port, () => {
  console.log(`Product management service listening at http://localhost:${port}`);
});

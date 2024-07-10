const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

let invoices = [];

app.post('/invoices', (req, res) => {
  const invoice = req.body;
  invoice.id = invoices.length + 1;
  invoices.push(invoice);
  res.status(201).json(invoice);
});

app.get('/invoices', (req, res) => {
  res.json(invoices);
});

app.get('/invoices/:id', (req, res) => {
  const invoice = invoices.find(i => i.id === parseInt(req.params.id));
  if (!invoice) {
    return res.status(404).send('Invoice not found');
  }
  res.json(invoice);
});

app.listen(port, () => {
  console.log(`Billing service listening at http://localhost:${port}`);
});

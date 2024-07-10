const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let reservations = [];

app.post('/reservations', (req, res) => {
  const reservation = req.body;
  reservation.id = reservations.length + 1;
  reservations.push(reservation);
  res.status(201).json(reservation);
});

app.get('/reservations', (req, res) => {
  res.json(reservations);
});

app.get('/reservations/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (!reservation) {
    return res.status(404).send('Reservation not found');
  }
  res.json(reservation);
});

app.listen(port, () => {
  console.log(`Restaurant reservation service listening at http://localhost:${port}`);
});

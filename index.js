const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');
const port = process.env.PORT || 7555;

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/showPokemon', (req, res) => {
  // Get a random Pokemon id between 1 and 9.
  const randomId = Math.floor(Math.random() * Math.floor(9)) + 1;
  
  store
    .getPokemon(randomId)
    .then((data) => {
      res.json(data);
    });
});

app.post('/choose', (req, res) => {
  const id = req.body.id;
  store
    .choose({ id })
    .then((data) => res.json(data)); // Returns the id of the Pokemon that was chosen.
})

app.post('/notChoose', (req, res) => {
  const id = req.body.id;
  store
    .notChoose({ id })
    .then((data) => res.json(data)); // Returns the id of the Pokemon that was notChosen.
});

app.listen(port, () => {
  console.log(`Vulpix Server running ${port}.`);
});
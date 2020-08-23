const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const routes = require('@src/routes');

const app = express();

function errorHandling(err, req, res, next) {
  console.error(err);
  
  if (req.headersSent) {
    next(err);
  }

  if (err.isJoi) {
    res.status(422).json({
      type: 'validation error',
      errors: err.details.map(obj => ({
        key: obj.path.join('.'),
        message: obj.message,
      }))
    });
  } else {
    res.status(500).json({ error: err });
  }
}

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
app.use(errorHandling);

module.exports = app;
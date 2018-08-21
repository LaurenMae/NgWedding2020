// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

// Get our API routes
// const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/Wedding2020')));

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3900';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

app.get('/user/:invitationId', (req, res) => {
  const dbUrl = 'mongodb://admin:admin123@ds111012.mlab.com:11012/heroku_b2lnx5fw';

  mongoClient.connect(dbUrl, {}, function(err, db) {
    db.collection('users', function(err, users) {
      users.findOne({'invitationId': req.params.invitationId}, function(err, user) {
        console.log(err);
        if (err) { res.status(404); }
        console.log(user);
        res.status(200).send(user); // TODO move this
      });
    });
    db.close();
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/Wedding2020/index.html'));
});

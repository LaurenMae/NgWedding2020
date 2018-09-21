// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const async = require('async');

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

let transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'welshtomorris@gmail.com',
    pass: 'manygates'
  }
}));

let mailOptions = {
  from: 'welshtomorris@gmail.com',
  to: 'lauren.mae.welsh@gmail.com',
  subject: 'RSVP Submitted'
};

app.get('/user/:invitationId', (req, res) => {
  const dbUrl = 'mongodb://admin:admin123@ds111012.mlab.com:11012/heroku_b2lnx5fw';

  mongoClient.connect(dbUrl, {}, function(err, db) {
    db.collection('users', function(err, users) {
      users.find({'invitationId': req.params.invitationId}, {_id: 0, invitationId: 0}).toArray(function(err, users) {
        if (err) { res.status(404); }
        res.status(200).send(users); // TODO move this
      });
    });
    db.close();
  });
});

app.post('/sendrsvp/:invitationId', (req, res) => {
  mailOptions.text = JSON.stringify(req.body);
  
  async.eachSeries(req.body, (values, next) => {
    let newvalues = { $set: values };
    let query = { 
      invitationId: values.invitationId, 
      name: { 
        $where: function() {
          return this.name === values.name || this.name === '';
        }
      } 
    }; 

    updateUser(query, newvalues, next);
  }, (err) => {
    if (err) {
      res.send(err); // todo
    } else {
      res.send(); // todo
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/Wedding2020/index.html'));
});

function updateUser(query, newvalues, next) {
  const dbUrl = 'mongodb://admin:admin123@ds111012.mlab.com:11012/heroku_b2lnx5fw';

  mongoClient.connect(dbUrl, {}, function(err, db) {
    db.collection('users').updateOne(query, newvalues, function(err, res) {
      if (err) throw err; // todo
      db.close();
      sendRsvpEmail(next); // todo make into promise etc
    });
  });
}

function sendRsvpEmail(next) {
  transporter.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error); // TODO - catch this error
      next(error);
    } else {
      next(null, 'Email successfully sent'); // todo 
    }
  });
}
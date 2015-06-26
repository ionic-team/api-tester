var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');


var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json())
app.use(cors({
  origin: function(origin, callback) {
    console.log('ORIGIN', origin);
    return callback(null, true);
  }
}));

function r(req) {
  return {
    'status': 'OK',
    'method': req.method,
    'data': req.body
  }
}


app.get('/json', function (req, res) {
  res.json(r(req));
});
app.post('/json', function (req, res) {
  res.json(r(req));
});
app.put('/json', function (req, res) {
  res.json(r(req));
});
app.delete('/json', function (req, res) {
  res.json(r(req));
});
app.patch('/json', function (req, res) {
  res.json(r(req));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

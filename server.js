var express = require('express'),
    cors = require('cors');

var app = express();

app.use(cors({
  origin: function(origin, callback) {
    console.log('ORIGIN', origin);
    return callback(null, true);
  }
}));

function r(m) {
  return {
    'status': 'OK',
    'method': 'get'
  }
}

app.get('/json', function (req, res) {
  res.json(r('get'));
});
app.post('/json', function (req, res) {
  res.json(r('post'));
});
app.put('/json', function (req, res) {
  res.json(r('put'));
});
app.delete('/json', function (req, res) {
  res.json(r('delete'));
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

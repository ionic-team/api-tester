var express = require('express'),
    cors = require('cors');


var app = express();

app.set('port', (process.env.PORT || 5000));

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

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

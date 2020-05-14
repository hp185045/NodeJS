//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})

var cache = {};

app.post('/set', function(req, res) {
  var query = req.query;
  Object.keys(query).forEach(function(key) {
    cache[key] = query[key];
  });
  res.status(200).end();
});

module.exports = app;
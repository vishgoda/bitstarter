var express = require('express');

var file_buf = fs.readFileSync('./index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});


 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(file_buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

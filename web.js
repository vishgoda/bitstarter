var express = require('express');
var fs = require('fs'); 

var file_buf = fs.readFileSync('./index.html', "utf-8"); 
  if (!file_buf)
     throw new Error("cannot open index.htm file");

 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(file_buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

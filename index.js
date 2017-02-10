var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  console.log("Changes on the fly, from index.js");
  res.sendFile(__dirname + '/index.html');
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
/////////////////////////////
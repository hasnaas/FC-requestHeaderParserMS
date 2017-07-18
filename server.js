// server.js

var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
//app.set("views",__dirname + '/views/')
app.get("/", function (request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  //response.render('index',{ip:new Date().toDateString()})
  
  var ua=request.header("user-agent");
  var tosend={
    "ip address" : request.header("x-forwarded-for").split(',')[0],
    //"ipaddress": request.connection.remoteAddress,
    "language" : request.header("accept-language").split(',')[0] ,
    "software" : ua.substring(ua.indexOf('(')+1,ua.indexOf(')'))
    
  }
  response.send(tosend);
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

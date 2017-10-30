var http = require('http');
var dt = require('./module');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // MODULO EXTERNO
    res.write("1. LOAD EXTERNAL MODULE")
    res.write("<br>The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
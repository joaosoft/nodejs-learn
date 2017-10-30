var http = require('http');
var url = require('url');
var dt = require('./module');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    // REQUESTED URL
    res.write("<br><br>2. PRINT REQUESTED URL")
    res.write("<br>" + req.url);

    res.end();
}).listen(8080);
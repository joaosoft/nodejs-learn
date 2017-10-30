var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // WRITE NEW
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });

    res.end();
}).listen(8080);
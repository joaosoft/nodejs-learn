var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // WRITE FILE - APPEND
    res.write("<br><br>5. FILES")
    var fs = require('fs');
    fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Appended!');
    });
    
    // DELETE FILE
    fs.unlink('mynewfile.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    res.end();
}).listen(8080);
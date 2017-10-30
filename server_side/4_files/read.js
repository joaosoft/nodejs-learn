var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // READ FILE
    var filename = "demo.html";
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.write("404 Not Found");
        }  
        res.write("LI O FICHEIRO!")
        res.write(data);
    });

    res.end();
}).listen(8080);
// Create Connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "postgres",
  password: "postgres"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

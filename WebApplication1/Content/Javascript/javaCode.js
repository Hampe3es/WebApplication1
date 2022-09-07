var mysql = require('mysql');

var con = mysql.createConnection({
  host: "Localhost",
  user: "root",
  password: "39258308",
  database: "testdb"
});



con.connect(function(err) {
    if (err);
    con.query("SELECT * FROM testtabel", function (err, result, fields) {
      if (err);
      console.log(result);
    });
  });
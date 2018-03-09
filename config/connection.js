// Set up MySQL connection.
var mysql = require("mysql");
//if (process.env.NODE_ENV !== 'production') require('dotenv').config();

var connection;


  connection = mysql.createConnection({
    host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    // My username
    user: "tdyu46zlvk8xh5m5",
    // My password from the dotenv file to keep it secured
    password: "t45us6fe9rp5pnrl",
    database: "p2ugeemkd1o0bdbc"
});


// Make connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use
  module.exports = connection;


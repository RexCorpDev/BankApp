'use strict';

var mysql = require('mysql');

var db = mysql.createConnection({
  host:       'localhost',
  user:       'root',
  password:   'Zoolander',
  database:   'BankingApp'
});

db.connect();

//CREATE TABLE
//db.query(`CREATE TABLE IF NOT EXISTS HomeInventory.ITEMS (ID INT PRIMARY KEY AUTO_INCREMENT, DESCRIPTION TEXT, MODEL TEXT, SERIAL INT, VALUE TEXT)`);

// SHOW ALL ITEMS
//db.query(`SELECT * FROM ITEMS`);

//INSERT INTO
//db.query(`INSERT INTO ITEMS (DESCRIPTION, MODEL, SERIAL, VALUE) VALUES ("DESK", "A342", "12345", "$99.00")`);


// DELETE BY ID
//db.query('DELETE FROM ITEMS WHERE ID = 1');
//console.log('config db: ',database);

// db.done();

module.exports = db;

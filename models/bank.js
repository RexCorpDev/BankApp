'use strict';

var db = require('../config/db');
var moment = require('moment');

db.query('CREATE TABLE IF NOT EXISTS trans (Id INT PRIMARY KEY AUTO_INCREMENT, Date DATE, Description TEXT, Type TEXT, Amount DECIMAL(10,2), Memo TEXT)');

let Bank = {
  get(cb){
    db.query(`SELECT * FROM trans`, cb);
  },
  createTrans(newTrans, cb){
    var sliceDate = newTrans.Date.slice(0, 10);
    if(!newTrans) { return cb('Missing required fields');}
    db.query(`INSERT INTO trans (Date, Description, Type, Amount, Memo) VALUES ("${sliceDate}","${newTrans.Description}","${newTrans.Type}","${newTrans.Amount}","${newTrans.Memo}")`, cb);
  },
  deleteThis(Id, cb){
    if(!Id) { return cb('Missing required fields');}
    db.query(`DELETE FROM trans WHERE ID = ${Id}`, cb);
  }
};

module.exports = Bank;

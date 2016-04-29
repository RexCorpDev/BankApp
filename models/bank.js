'use strict';

var db = require('../config/db');
var moment = require('moment');


//CREATE TABLE
db.query('CREATE TABLE IF NOT EXISTS BankingApp.trans (Id INT PRIMARY KEY AUTO_INCREMENT, Date DATE, Description TEXT, Type TEXT, Amount DECIMAL(10,2), Memo TEXT)');


exports.get = function(cb){
  db.query(`SELECT * FROM trans`, cb);
}

exports.createTrans = function(newTrans, cb){

  var sliceDate = newTrans.date.slice(0, 10);
  console.log('sliceDate=> ', sliceDate);

  console.log('newTrans @ bank.js=> ', newTrans);
  if(!newTrans) { return cb('Missing required fields');}
  db.query(`INSERT INTO trans (Date, Description, Type, Amount, Memo) VALUES ("${newTrans.date}","${newTrans.description}","${newTrans.type}","${newTrans.amount}","${newTrans.memo}")`, cb);
}

exports.deleteThis = function(Id, cb){
  //DELETE By ID
  console.log('DeleteThis @ bank.js=> ', Id);
  if(!Id) { return cb('Missing required fields');}
  db.query(`DELETE FROM trans WHERE ID = ${Id}`, cb);
}
//
// exports.editTrans = function(editInfo, cb) {
//   // EDIT
//     //console.log(editInfo.location, editInfo.id);
//     if(!editInfo.id) { return cb('Missing required fields');}
//
//     db.query(`UPDATE trans SET
//       Date = "${editInfo.date}" WHERE id = ${editInfo.id},
//       Description = "${editInfo.description}" WHERE id = ${editInfo.id},
//       Type = "${editInfo.type}" WHERE id = ${editInfo.id},
//       Amount = "${editInfo.amount}" WHERE id = ${editInfo.id},
//       Memo = "${editInfo.memo}" WHERE id = ${editInfo.id}`, cb);
// };
//
// exports.findOneRoom = function(id, cb){
//   if(!id) { return cb('Missing required fields');}
//   db.query(`SELECT * FROM rooms WHERE ID = ${id}`, cb);
// }

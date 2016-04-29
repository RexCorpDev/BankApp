'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Banks = require('../models/banks');

//  GET /
router.get('/', (req, res) => {
  // Banks.get((err, banks) => {
  //   if(err) {
  //     res.render('error', {error: err})
  //   } else {
  //
  //     banks = banks.map(bank => {
  //       bank.dueDate = moment(bank.dueDate, 'X').format('l');
  //       bank.createdAt = moment(bank.createdAt, 'X').format('l');
  //       return todo;
  //     })
  //
  //     res.render('index', {banks: banks});
  //   }
  // })
  res.send('all the transactions');
})

module.exports = router;

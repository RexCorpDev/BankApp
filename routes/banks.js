'use strict';

var express = require('express');
var router = express.Router();
var Bank = require('../models/bank');

router.route('/')
.get((req, res) => {
  Bank.get((err, banks) => {
    res.status(err ? 400 : 200).send(err || banks);
  });
})
.post((req, res) => {
  Bank.createTrans(req.body, (err, newTrans) => {
    res.status(err ? 400 : 200).send(err || newTrans);
  });
});
router.delete('/:id', (req, res) => {
  Bank.deleteThis(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});
router.put('/:id/edit', (req, res) => {
  Bank.editTrans(req.params.id, (err, editInfo) => {
    res.status(err ? 400 : 200).send(err || editInfo);
  });
});

module.exports = router;

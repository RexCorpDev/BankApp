'use strict';

var express = require('express');
var router = express.Router();
var Bank = require('../models/bank');




router.route('/')
.get((req, res) => {

  console.log('req.body=> ', req.body);
  Bank.get((err, banks) => {
    if(err) {
      return res.status(400).send(err);
    }
    console.log("banks=> ", banks);
    res.send(banks); // banks --> res.data
  });
})

.post((req, res) => {
  console.log("post @ banks.js=> ", req.body);
  Bank.createTrans(req.body, (err, newTrans) => {
    if(err) {
      return res.status(400).send(err);
    }
    console.log("res.send @ banks.js=> ", newTrans);
    res.send(newTrans);
  });
});

router.delete('/:id', (req, res) => {
  console.log("delete @ banks.js=> ", req.params.id);
  Bank.deleteThis(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


router.put('/:id/edit', (req, res) => {

  Bank.editTrans(req.params.id, (err, editInfo) => {
    if(err) {
      return res.status(400).send(err);
    }

    res.send({editInfo: editInfo});
  });
});










module.exports = router;

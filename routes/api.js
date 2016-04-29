'use strict';

var express = require('express');
var router = express.Router();

router.use('/banks', require('./banks'));

module.exports = router;

  //
  // $scope.createTodo = () => {
  //   Todo.create($scope.newTodo)
  //   .then(res => {
  //     var todo = res.data;
  //     $scope.todos.push(todo);
  //     $scope.newTodo = null;
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // };

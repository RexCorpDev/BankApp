'use strict';

var app = angular.module('bankApp');

app.controller('mainCtrl', function($scope, Bank){
  var edits = {};
  $scope.balance = 0;
  $scope.withdrawals = 0;
  $scope.deposits = 0;

  Bank.getAll()
  .then(res => {
    // console.log("get res.data", res.data);

    $scope.transactions = res.data;
    // console.log('get Data=> ', $scope.transactions);
  })
  .catch(err => {
    console.log('err: ', err);
  });

  $scope.addTrans = (newTrans) => {

    if($scope.newTrans){
      $scope.addAlert = false;
      console.log("newTrans to Services, ", newTrans);

      Bank.createTrans(newTrans)
      .then(res => {
        // var transaction = res.data;
        $scope.transactions.push(res.data);
        $scope.newTrans = null;
      })
      .catch(err => {
        console.error(err);
      });

      console.log("arrData + New=> ", $scope.transactions);

      $scope.balance += $scope.newTrans.amount;

      if($scope.newTrans.type === 'Withdrawal'){
        $scope.withdrawals += $scope.newTrans.amount;
      } else if($scope.newTrans.type === 'Deposit'){
        $scope.deposits += $scope.newTrans.amount;
      };
      $scope.newTrans = {};

    } else {
      $scope.addAlert = true;
    };
  };

  $scope.deleteTrans = (deleteThis) => {
    console.log('deleteThis=> ', deleteThis.Id);
    Bank.remove(deleteThis.Id)
    .then(() => {
      var index = $scope.transactions.indexOf(deleteThis);
      console.log("adjust balance for Delete=> ", $scope.transactions[index].amount);
      $scope.balance -= $scope.transactions[index].amount;
      $scope.transactions.splice(index, 1);
    })
    .catch(err => {
      console.error(err);
    });
  };


  $scope.editTrans = (trans) => {
    edits = angular.copy(trans);    // copy information to 'edits'
    $scope.newTrans = edits;
    $scope.showEdit = true;
    $scope.showAdd = true;
    console.log('editTrans obj; ',edits);

  };

  $scope.submitEdit = (newTrans)=>{
    if($scope.newTrans){
      $scope.showEdit = false;
      $scope.showAdd = false;
      $scope.newTrans = {};
      $scope.transactions.push($scope.newTrans);
      console.log('edits; ',edits);
      console.log('arrData + edit=> ', $scope.transactions);
    };
  };



  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };
});

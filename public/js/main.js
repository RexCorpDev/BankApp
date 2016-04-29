'use strict';

var app = angular.module('bankApp', []);

app.controller('mainCtrl', function($scope){

  $scope.balance = 0;
  $scope.withdrawals = 0;
  $scope.deposits = 0;

 $scope.transactions = [ ];

  $scope.addTrans = (newTrans) => {
    if($scope.newTrans){
      $scope.addAlert = false;
      $scope.transactions.push($scope.newTrans);
      $scope.balance += $scope.newTrans.amount;

      if($scope.newTrans.type === 'Withdrawal'){
        $scope.withdrawals += $scope.newTrans.amount;
      } else if($scope.newTrans.type === 'Deposit'){
        $scope.deposits += $scope.newTrans.amount;
      };

      $scope.newTrans = {};
    } else {
      $scope.addAlert = true;
    }
  };

  var edits = {};

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
      console.log('trans; ', $scope.transactions);
    }
  }


  $scope.deleteTrans = (deleteThis) => {
    var index = $scope.transactions.indexOf(deleteThis);
    console.log($scope.transactions[index].amount);
    var amountInt = parseInt($scope.transactions[index].amount, 10);
    console.log(amountInt);
    $scope.balance -= $scope.transactions[index].amount;
    $scope.transactions.splice(index, 1);
  };

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    }
  };



  // $scope.saveChanges = (saveThis) => {
  //   $scope.show = false;
  //   var index = $scope.transactions.indexOf(editThis);
  // }



  // $scope.watchBalance = () => {
  //   var totalBalance = 0;
  //   for(var i = 0; i < $scope.transactions.length; i++){
  //     totalBalance += $scope.transactions.amount[i]
  //   };
  //   return $scope.balance = totalBalance;
  // }
});

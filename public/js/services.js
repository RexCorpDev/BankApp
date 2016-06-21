'use strict';

var app = angular.module('bankApp');

app.service('Bank', function($http) {

  this.getAll = () => $http.get('/api/banks');

  this.createTrans = trans => $http.post('/api/banks', trans);

  this.remove = deleteId => $http.delete(`/api/banks/${deleteId}`);

});

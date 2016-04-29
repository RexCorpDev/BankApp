'use strict';

var app = angular.module('bankApp');

// services.js
// all services and factories

app.service('Bank', function($http) {

  // manage all trans api calls

  this.getAll = () => {
    return $http.get('/api/banks');
  };

  this.createTrans = trans => {
    console.log('service newTrans out, ', trans);
    return $http.post('/api/banks', trans);
  };

  this.remove = deleteId => {
    console.log('service delete out, ', deleteId);
    return $http.delete(`/api/banks/${deleteId}`);
  };

  //
  // this.toggle = trans => {
  //   return $http.put(`/api/banks/${trans.id}/edit`);
  // };
  //

});

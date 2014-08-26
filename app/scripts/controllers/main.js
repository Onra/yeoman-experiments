'use strict';

/**
 * @ngdoc function
 * @name yeomantodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomantodoApp
 */
angular.module('yeomantodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

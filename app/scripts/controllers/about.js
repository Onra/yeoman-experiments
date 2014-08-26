'use strict';

/**
 * @ngdoc function
 * @name yeomantodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomantodoApp
 */
angular.module('yeomantodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

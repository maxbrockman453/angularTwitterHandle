var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){

  $scope.handle = '';

  $scope.lowercaseHandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.rules = [
    { rulename: 'Must be at least 5 characters'},
    { rulename: 'Must not already exist'},
    { rulename: 'Must be cool!'}
  ]

}]);


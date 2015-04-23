angular.module('myApp.controllers').controller('CategoriesCtrl', function ($scope, $location) {
  $scope.loginWithEmail = function () {
    $location.path('/login');
  };
});

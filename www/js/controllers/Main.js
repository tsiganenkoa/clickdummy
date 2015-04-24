angular.module('myApp.controllers', []).controller('AppCtrl', function ($scope, $ionicModal, $timeout, $rootScope, $location) {

  $rootScope.openUploadCategories = function (imgStr) {
    $rootScope.takenCardPhoto = imgStr;
    $location.path('/upload-categories');
  };

});
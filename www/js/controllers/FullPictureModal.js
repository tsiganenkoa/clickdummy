angular.module('myApp.controllers').controller('FullPictureModalCtrl', function ($scope, $timeout, FullPictureModalService) {
  $scope.service = FullPictureModalService;
  
  $scope.toggleFollow = function(){
    $scope.service.profile.followed = !$scope.service.profile.followed;
  };
});

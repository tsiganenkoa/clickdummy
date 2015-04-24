angular.module('myApp.controllers').controller('CaptureModalCtrl', function ($scope, $stateParams, CaptureModalService) {
  $scope.service = CaptureModalService;
  $scope.data = CaptureModalService.getOptions();
  $scope.areaShown = 'edit';
  
  $scope.addComment = function(){
    $scope.data.comment = $scope.data.commentVal;
    $scope.areaShown = 'completed';
  };
  
  $scope.apply = function(){
    if($scope.service.getOptions().callback){
      $scope.service.getOptions().callback($scope.data);
    }
    $scope.service.close();
    $scope.areaShown = 'edit';
  };
});

angular.module('myApp.controllers').controller('CardsCtrl', function ($scope, $stateParams, $window) {
  var cardTypes = [
    {
      image: 'img/examples/1.jpg',
      comment: '',
      name: 'John Doe',
      yaays: 115,
      followers: 120,
      avatar: 'img/avatars/1.jpg'
    },
    {
      image: 'img/examples/2.jpg',
      comment: 'Sunglasses!',
      name: 'Megan Fox',
      yaays: 215,
      followers: 240,
      avatar: 'img/avatars/1.jpg'
    },
    {
      image: 'img/examples/3.jpg',
      comment: 'Yaaay!',
      name: 'Lady Gaga',
      yaays: 542,
      followers: 12,
      avatar: 'img/avatars/1.jpg'
    },
    {
      image: 'img/examples/4.jpg',
      comment: 'Hello world!',
      name: 'Kate White',
      yaays: 123,
      followers: 709,
      avatar: 'img/avatars/1.jpg'
    }
  ];
  var CARDS_NUMBER = 4;

  $scope.cardDestroyed = function (index) {
    $scope.cards.splice(index, 1);
    $scope.addCard();
  };

  $scope.addCard = function () {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.unshift(angular.extend({}, newCard));
  };

  $scope.cards = [];
  for (var i = 0; i < CARDS_NUMBER; i++) {
    $scope.addCard();
  }

  $scope.myProfile = {
    yaays: 8032,
    followers: 1032
  };
  
  $scope.uploadDisabled = true;

  $scope.cardSwipedLeft = function (index) {
    console.log('LEFT SWIPE');
  };
  $scope.cardSwipedRight = function (index) {
    console.log('RIGHT SWIPE');
  };
  
  $scope.showLimitedAert = function(){
    $('.page-cards .tooltip.limited-category').fadeIn(300, function(){
      var that = this;
      setTimeout(function(){
        $(that).fadeOut(300);
      }, 1000);
    });
  };
  
  $scope.onClickCamera = function(){
    if($scope.uploadDisabled){
      $scope.showLimitedAert();
    }
  };
  
  $window.onCardPhotoSelected = function (fileElem) {
    var FR = new FileReader();
    FR.onload = function (e) {
      alert(e.target.result);
    };
    FR.readAsDataURL(fileElem.files[0]);
  };
  
  ionic.DomUtil.ready(function () {
    //run this code only when upload is disabled
    if($scope.uploadDisabled){
      $scope.showLimitedAert();
    }
  });
});

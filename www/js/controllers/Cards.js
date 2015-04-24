angular.module('myApp.controllers').controller('CardsCtrl', function ($scope, $stateParams, CaptureModalService, $window) {
  var cardTypes = [
    {
      image: 'img/examples/1.jpg',
      comment: '',
      name: 'John Doe',
      yaays: 115,
      followers: 120,
      avatar: 'img/avatars/1.jpg',
      color: 'pink'
    },
    {
      image: 'img/examples/2.jpg',
      comment: 'Sunglasses!',
      name: 'Megan Fox',
      yaays: 215,
      followers: 240,
      avatar: 'img/avatars/1.jpg',
      color: 'blue'
    },
    {
      image: 'img/examples/3.jpg',
      comment: 'Yaaay!',
      name: 'Lady Gaga',
      yaays: 542,
      followers: 12,
      avatar: 'img/avatars/1.jpg',
      color: 'grey'
    },
    {
      image: 'img/examples/4.jpg',
      comment: 'Hello world!',
      name: 'Kate White',
      yaays: 123,
      followers: 709,
      avatar: 'img/avatars/1.jpg',
      color: 'blue'
    },
    {
      image: 'img/examples/5.jpg',
      comment: '',
      name: 'John Doe',
      yaays: 115,
      followers: 120,
      avatar: 'img/avatars/1.jpg',
      color: 'pink'
    },
    {
      image: 'img/examples/6.jpg',
      comment: 'Yaaay!',
      name: 'Lady Gaga',
      yaays: 542,
      followers: 12,
      avatar: 'img/avatars/1.jpg',
      color: 'grey'
    }
  ];
  var CARDS_NUMBER = 3;

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
  
  function partialMoveCardPosition(elem, from, to, amt){
    var lastCardWidth = 97, lastCardTop = 16;
    var backCardWidth = 92.2, backCardTop = 9;
    var newval = {width: 0, marginTop: 0};
    if (amt >= 1) {
      newval = angular.copy(to);
    } else if (amt <= 0) {
      newval = angular.copy(from);
    } else {
      newval.width = from.width + (to.width - from.width) * amt;
      newval.marginTop = from.marginTop + (to.marginTop - from.marginTop) * amt;
    }
    $(elem).css({
      width: newval.width + '%',
      marginLeft: (-1 * newval.width / 2 + 0.1) + '%',
      marginTop: newval.marginTop + 'px'
    });
  }

  $scope.cardPartialSwipe = function (amt) {
    partialMoveCardPosition('td-card.card-0', {width: 87, marginTop: 3}, {width: 92.2, marginTop: 9}, amt);
    partialMoveCardPosition('td-card.card-1', {width: 92.2, marginTop: 9}, {width: 97, marginTop: 16}, amt);
  };

  $scope.showLimitedAlert = function () {
    $('.page-cards .tooltip.limited-category').fadeIn(300, function () {
      var that = this;
      setTimeout(function () {
        $(that).fadeOut(300);
      }, 1000);
    });
  };

  $scope.onClickCamera = function () {
    if ($scope.uploadDisabled) {
      $scope.showLimitedAlert();
    }
  };

  $window.onCardPhotoSelected = function (fileElem) {
    var FR = new FileReader();
    FR.onload = function (e) {
      CaptureModalService.open({id: $stateParams.categoryId, name: 'Most Beatiful Pics'}, e.target.result, function(){
        alert('Photo has been added to this category.');
      });
    };
    FR.readAsDataURL(fileElem.files[0]);
  };

  $scope.toggleFollow = function (card) {
    card.followed = !card.followed;
  };

  ionic.DomUtil.ready(function () {
    //run this code only when upload is disabled
    if ($scope.uploadDisabled) {
      $scope.showLimitedAlert();
    }
  });
});
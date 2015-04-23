angular.module('myApp.controllers').controller('CategoriesCtrl', function ($scope, $location) {
  $scope.loginWithEmail = function () {
    $location.path('/login');
  };
  
  $scope.categories = [
    {
      id: 1,
      image: 'img/examples/1.jpg',
      cup: 'gold',
      category: 'pink',
      name: 'Most Beautiful Pic of the week'
    },
    {
      id: 2,
      image: 'img/examples/2.jpg',
      cup: 'silver',
      category: 'blue',
      name: 'Hello Dolley?'
    },
    {
      id: 3,
      image: 'img/examples/3.jpg',
      cup: 'bronze',
      category: 'blue',
      name: 'Stylish Pic?'
    },
    {
      id: 4,
      image: 'img/examples/4.jpg',
      cup: 'gold',
      category: 'grey',
      name: 'Most Beautiful Pic of the week'
    },
    {
      id: 5,
      image: 'img/examples/5.jpg',
      cup: 'gold',
      category: 'blue',
      name: 'Most Beautiful Pic of the week'
    },
    {
      id: 6,
      image: 'img/examples/6.jpg',
      cup: 'bronze',
      category: 'grey',
      name: 'Stylish Pic?'
    }
  ];
});

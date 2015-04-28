'use strict';

angular.module('myApp').config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
          .state('app', {
            url: '',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })

          .state('app.start', {
            url: '/start',
            views: {
              'menuContent': {
                templateUrl: 'templates/start.html',
                controller: 'StartCtrl'
              }
            }
          })

          .state('app.login', {
            cache: false,
            url: '/login',
            views: {
              'menuContent': {
                templateUrl: 'templates/login.html'
              }
            }
          })

          .state('app.forgot-password', {
            cache: false,
            url: '/forgot-password',
            views: {
              'menuContent': {
                templateUrl: 'templates/forgot-password.html'
              }
            }
          })

          .state('app.forgot-password-code', {
            cache: false,
            url: '/forgot-password-code',
            views: {
              'menuContent': {
                templateUrl: 'templates/forgot-password-code.html'
              }
            }
          })

          .state('app.complete-profile', {
            cache: false,
            url: '/complete-profile',
            views: {
              'menuContent': {
                templateUrl: 'templates/complete-profile.html',
                controller: 'CompleteProfileCtrl'
              }
            }
          })

          .state('app.introduction', {
            cache: false,
            url: '/introduction',
            views: {
              'menuContent': {
                templateUrl: 'templates/introduction.html',
                controller: 'IntroductionCtrl'
              }
            }
          })

          .state('app.categories', {
            url: '/categories',
            views: {
              'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'CategoriesCtrl'
              }
            }
          })

          .state('app.cards', {
            cache: false,
            url: '/cards/:categoryId',
            views: {
              'menuContent': {
                templateUrl: 'templates/cards.html',
                controller: 'CardsCtrl'
              }
            }
          })

          .state('app.upload-categories', {
            url: '/upload-categories',
            views: {
              'menuContent': {
                templateUrl: 'templates/upload-categories.html',
                controller: 'UploadCategoriesCtrl'
              }
            }
          })

          .state('app.profile', {
            url: '/profile/:profileId',
            views: {
              'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
              }
            }
          })
          
          .state('app.myresults', {
            url: '/myresults',
            views: {
              'menuContent': {
                templateUrl: 'templates/myresults.html',
                controller: 'MyResultsCtrl'
              }
            }
          });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start');
});

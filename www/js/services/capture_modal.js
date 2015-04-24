'use strict';

angular.module('myApp.services')
        .factory('CaptureModalService', function ($rootScope, $ionicModal) {
          var modal;
  
          var options = {};
          
          options.category = {id: 1, name: 'Most Beautilful Pic of the week?'};

          // Create the login modal that we will use later
          $ionicModal.fromTemplateUrl('templates/capture-modal.html', {
            scope: $rootScope
          }).then(function (m) {
            modal = m;
          });
          

          var _service = {
            getModal: function () {
              return modal;
            },
            close: function(){
              modal.hide();
            },
            open: function(category, photoContent, callback){
              options.category = category;
              options.photoContent = photoContent;
              options.callback = callback;
              modal.show();
            },
            getOptions: function(){
              return options;
            }
          };

          return _service;
        });

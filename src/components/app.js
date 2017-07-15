angular.module('video-player')

  .component('app', {
    controller: 'AppCtrl',
    bindings: {

    },
    templateUrl: "src/templates/app.html"
  })

  .controller('AppCtrl', function($scope) {
    $scope.$ctrl.videos = window.exampleVideoData;
    $scope.$ctrl.video = window.exampleVideoData[0];  
  });
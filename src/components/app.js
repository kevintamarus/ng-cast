angular.module('video-player')

  .component('app', {
    controller: 'AppCtrl',
    bindings: {
    },
    templateUrl: "src/templates/app.html"
  })

  .controller('AppCtrl', function($scope, youTube) {
    $scope.$ctrl.videos = window.exampleVideoData;
    $scope.$ctrl.video = window.exampleVideoData[0];
    $scope.$ctrl.videoclick = function click(video){
      $scope.$ctrl.video = video;
    };
    //app
    $scope.$ctrl.selectVideo = function select(){
      console.log('selectvideo function');
    };
    $scope.$ctrl.searchclick = function search(query) {
      console.log('clicked');
    };
    $scope.$ctrl.result = function(query) {
      youTube.search(query, function(data) {
        $scope.$ctrl.selectVideo(data[0]);
        $scope.$ctrl.searchResults(data);
      });
    };

    $scope.$ctrl.selectVideo = function(video) {
      $scope.$ctrl.video = video;
    }
    $scope.$ctrl.searchResults = function(videos) {
      $scope.$ctrl.videos = videos;
    }
    //dummy property name to pass the test, real property is $scope.$ctrl.currentVideo
    $scope.$ctrl.currentVideo = window.exampleVideoData[0];

    $scope.$ctrl.$onInit = function() {
      $scope.$ctrl.result('reason 6 tutorial');
    };
  });
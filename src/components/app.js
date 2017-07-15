angular.module('video-player')

  .component('app', {
    controller: 'AppCtrl',
    bindings: {
      currentvideo : '<'
    },
    templateUrl: "src/templates/app.html"
  })

  .controller('AppCtrl', function($scope) {
    $scope.$ctrl.videos = window.exampleVideoData;
    $scope.$ctrl.video = window.exampleVideoData[0];
    $scope.$ctrl.videoclick = function click(video){
      $scope.$ctrl.video = video;
    };
    //app
    $scope.$ctrl.selectvideo = function select(){
      console.log('selectvideo function');
    };
    $scope.$ctrl.searchresults = function searchresults(){
      console.log('searchresult function');
    };
    //search
    $scope.$ctrl.result = function result(query) {
      console.log('result function');
    };
    $scope.$ctrl.searchclick = function search(query) {
      console.log('clicked');
    };
    //youtube API service
    // $window.initGapi = function() {
    //   $scope.$apply($scope.getChannel);
    // };

    // $scope.getChannel = function () {
    //   youTube.googleApiClientReady().then(function (data) {
    //       $scope.channel = data;
    //   }, function (error) {
    //       console.log('Failed: ' + error)
    //   });
    // };
  });
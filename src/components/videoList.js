angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      videoclick: '<',
      onClick: '<'
    },
    templateUrl: "src/templates/videoList.html"
  });

angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      videoclick: '<'
    },
    templateUrl: "src/templates/videoListEntry.html"
  });

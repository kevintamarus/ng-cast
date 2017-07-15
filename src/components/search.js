angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      searchclick : '<'
    },
    templateUrl: "src/templates/search.html"
  });

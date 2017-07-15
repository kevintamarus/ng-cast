angular.module('video-player')
//this example was copied from a stackoverflow forum
// .service('youTube', ['$http', '$q', function ($http, $q) {

//   var deferred = $q.defer();
//   this.googleApiClientReady = function () {
//     gapi.client.setApiKey(window.YOUTUBE_API_KEY);
//     gapi.client.load('youtube', 'v3', function() {
//       var request = gapi.client.youtube.playlistItems.list({
//           part: 'snippet',
//           playlistId: 'PLila01eYiSBjOtR8oqXkY0i5c1QS6k2Mu',
//           maxResults: 5
//       });
//       request.execute(function(response) {
//           deferred.resolve(response.result);
//       });
//     });
//     return deferred.promise;
//   };
// }])


  .service('youTube', function(){
    // TODO
  });



angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(query, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          key: YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          type: 'video'
        }
      })
      .then(function successCallback(responseData){
        if (callback) {
          callback(responseData.data.items);
        }
      })
      .catch(function errorCallback(response){
        console.log('error', response);
      });
    };
  });



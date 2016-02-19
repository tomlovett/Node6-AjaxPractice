angular.module('contest').factory('contestFactory', ['$http', function($http) {

	var getVideos = function() {
		return $http.get('/api/videos')
	}

	var newSubmission = function(videoDeets) {
		return $http.post('/api/videos', videoDeets)
	}

	var shuffleVids = function(videos) {  // copied from StackOverflow (thumbs up!)
		var j, x, i;
		for (i = videos.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = videos[i-1];
			videos[i-1] = videos[j];
			videos[j] = x;
		}
	}

	var deleteVideo = function(videoDeets) {
		if (!videoDeets)  return		// to catch one-person contests
		return $http.post('/api/delete', videoDeets)
	}

	var nextRound = function() {
		return $http.get('api/nextRound')
	}

	return {
		getVideos     : getVideos,
		newSubmission : newSubmission,
		shuffleVids   : shuffleVids,
		deleteVideo   : deleteVideo
	}

}])
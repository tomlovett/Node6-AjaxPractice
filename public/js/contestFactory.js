angular.module('contest').factory('contestFactory', ['$http', function($http) {

	var getVideos = function() {
		return $http.get('/api/videos')
	}

	var newSubmission = function(videoDeets) {
		return $http.post('/api/videos', videoDeets)
	}

	// var shuffleVids = function() {		-- deprecated
	// 	return $http.get('/api/shuffle')
	// }

	var shuffleVids = function(videos) {  // copied from StackOverflow (thumbs up!)
		console.log('shuffleVids')
		var j, x, i;
		for (i = videos.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = videos[i-1];
			videos[i-1] = videos[j];
			videos[j] = x;
		}
	}

	var deleteVideo = function(videoDeets) {
		return $http.post('/api/delete', videoDeets)
	}

	return {
		getVideos     : getVideos,
		newSubmission : newSubmission,
		shuffleVids   : shuffleVids,
		deleteVideo   : deleteVideo
	}

}])
angular.module('contest').factory('contestFactory', ['$http', function($http) {

	var getVideos = function() {
		return $http.get('/api/videos')
	}

	var newSubmission = function(videoDeets) {
		return $http.post('/api/videos', videoDeets)
	}

	var shuffleVids = function() {
		return $http.get('/api/shuffle')
	}

	var deleteVideo = function(videoDeets) {
		return $http.post('/api/delete', videoDeets)
	}

	// delete video

	return {
		getVideos     : getVideos,
		newSubmission : newSubmission,
		shuffleVids   : shuffleVids,
		deleteVideo   : deleteVideo
	}

}])
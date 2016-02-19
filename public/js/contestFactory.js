angular.module('contest').factory('contestFactory', ['$http', function($http) {

	var getVideos = function() {
		return $http.get('/api/videos')
	}

	var newSubmission = function(videoDeets) {
		return $http.post('/api/videos', videoDeets)
	}

	return {
		getVideos     : getVideos,
		newSubmission : newSubmission
	}

}])
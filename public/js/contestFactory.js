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
		return $http.get('/api/nextRound')
	}

	var killLoser = function(contest) {
		var loser 
		// calculates outright winner, or assigns randomly
		if (!contest.subTwo) { return }
		if (contest.votesOne > contest.votesTwo) { 
			loser = contest.subTwo
		} else if (contest.votesTwo > contest.votesOne || Math.random() > .5) {
			loser = contest.subOne
		} else { loser = contest.subTwo}

		deleteVideo(loser)
	}

	var declareWinner = function() {
		console.log('calling declareWinner - contestFactory')
		// return $http.get('/api/declareWinner')
		window.location.href="winner.html"
	}

	return {
		getVideos     : getVideos,
		newSubmission : newSubmission,
		shuffleVids   : shuffleVids,
		deleteVideo   : deleteVideo,
		nextRound     : nextRound,
		killLoser     : killLoser,
		declareWinner : declareWinner
	}

}])
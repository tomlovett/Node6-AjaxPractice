angular.module('contest', [])

angular.module('contest').controller('contestHandler', ['$scope', '$sce', 'contestFactory', function($scope, $sce, contestFactory) {

	$scope.verifyVid = $sce.trustAsResourceUrl  // workaround for html error with loading videos

	var refreshSubs = function() {
			contestFactory.getVideos().then(function(returnData) {
				$scope.submissions = returnData.data
				console.log('refresh')
		})
	}

	// refreshSubs() is very slow as it is loading videos. haven't found a solution yet

	refreshSubs()

	$scope.newSubmission = function(videoDeets) {
		if ($scope.submissions.length > 7) {
			$scope.tooMany = true
			return
		}
		$scope.tooMany = false
		contestFactory.newSubmission(videoDeets)
		$scope.newVideo = {}
		refreshSubs()
	}

	$scope.shuffleVids = function() {
		contestFactory.shuffleVids($scope.submissions)
	}

	$scope.deleteVid = function(video) {
		contestFactory.deleteVideo(video)
		refreshSubs()
	}

	$scope.initContests = function() {
		$scope.shuffleVids()
		contestFactory.nextRound().then(function(returnData) {
			$scope.contests = returnData.data
		})
	}

	$scope.voteFor = function(video) {
		'pass data, son'
	}

}])